// Components
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Blueavatar from "../../../public/avatar-blue.png";

// CSS
import "./styles/WelcomeUser.css";

function WelcomeUser() {
  const context = useContext(UserContext);
  if (!context) {
    return <div>Erreur: le contexte utilisateur n'est pas disponible</div>;
  }

  const { UserIdData, UserIdLoading, UserIdfoError } = context;
  if (UserIdLoading) return <div>Chargement en cours...</div>;
  if (UserIdfoError) return <div>Erreur lors du chargement des données...</div>;

  // Vérification de UserIdData avant d'accéder aux propriétés
  if (!UserIdData || !UserIdData.username) {
    return <div>Erreur: les données utilisateur ne sont pas disponibles</div>;
  }

  return (
    <div className="welcomeUser">
      <div className="welcomeUser__container">
        <img
          className="welcomeUser__avatar"
          src={
            UserIdData.avatar
              ? `http://localhost:3310/${UserIdData.avatar}`
              : Blueavatar
          }
          alt="avatar"
        />
        <h3 className="welcomeUser__title">
          Bonjour,
          <span className="welcomeUser__username"> {UserIdData.username}</span>
        </h3>
      </div>
    </div>
  );
}

export default WelcomeUser;
