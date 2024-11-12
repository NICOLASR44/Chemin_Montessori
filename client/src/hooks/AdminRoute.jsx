import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  // Afficher un indicateur de chargement tant que les données ne sont pas prêtes
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Vérifier si l'utilisateur est admin après la fin du chargement
  if (user && user.isAdmin) {
    return children;
  }

  return <Navigate to="/" replace />;
}

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
