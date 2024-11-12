import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";
import NotAuthorizedPage from "../pages/NotAuthorizedPage";

function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (user && user.isAdmin) {
    return children; // Accès à la page si l'utilisateur est admin
  }

  // Rediriger vers NotAuthorizedPage si l'utilisateur n'est pas admin
  return <NotAuthorizedPage />;
}

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
