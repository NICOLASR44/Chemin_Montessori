import Cookies from "js-cookie";
import PropTypes from "prop-types";
import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Ajout de l'état de chargement

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/checkauth`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser({ ...data.user, isAdmin: data.isAdmin }); // Inclure `isAdmin` dans l'état `user`
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false); // Fin du chargement après la requête
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = useCallback(
    (newToken) => {
      Cookies.set("auth_token", newToken, { expires: 1 });
      checkAuth();
    },
    [checkAuth]
  );

  const logout = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        Cookies.remove("auth_token", { path: "/" });
        setUser(null);
      }
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  }, []);

  const userId = user?.id;

  const contextValue = useMemo(
    () => ({ user, userId, loading, login, logout }),
    [user, userId, loading, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
