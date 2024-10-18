import Cookies from "js-cookie";
import PropTypes from "prop-types";
import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

// Créer le contexte
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Fonction pour appeler /checkauth et vérifier l'authentification côté backend
  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/checkauth`,
        {
          method: "GET",
          credentials: "include", // Inclut les cookies dans la requête
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data.user); // Mettre à jour l'état utilisateur avec les données reçues
      } else {
        console.error(
          "Échec de la vérification de l'authentification :",
          response.status
        );
        setUser(null); // Si la vérification échoue, réinitialiser l'utilisateur
      }
    } catch (error) {
      console.error("Erreur lors de la requête checkauth :", error);
      setUser(null); // Réinitialiser l'utilisateur en cas d'erreur
    }
  }, []);

  // Appeler checkAuth lors du chargement de la page
  useEffect(() => {
    checkAuth(); // Vérifier l'authentification via l'API
  }, [checkAuth]);

  // Fonction de login
  const login = useCallback(
    (newToken) => {
      Cookies.set("auth_token", newToken, { expires: 1 });
      checkAuth(); // Vérifier l'authentification après la connexion
    },
    [checkAuth]
  );

  // Fonction de déconnexion
  const logout = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/logout`,
        {
          method: "POST",
          credentials: "include", // Inclure les cookies dans la requête
        }
      );

      if (response.ok) {
        // Suppression du cookie côté client
        Cookies.remove("auth_token", { path: "/" });
        setUser(null); // Réinitialiser l'état de l'utilisateur
      } else {
        console.error("Échec de la déconnexion :", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  }, []);

  // Utiliser l'id de l'utilisateur de l'état `user`
  const userId = user?.id;

  const contextValue = useMemo(
    () => ({ user, userId, login, logout }),
    [user, userId, login, logout]
  );

  // Fournir le contexte avec les fonctions et l'utilisateur
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
