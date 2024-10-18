import { useState } from "react";
import PropTypes from "prop-types";
import AuthForm from "./AuthForm";
import "../styles/Authmodal/LoginForm.css";
import Button from "../Button";
import ModalForgetPassword from "../ModalForgetPassword";

function LoginForm({ formData, setFormData, errors, handleSubmitLogin }) {
  // État pour gérer l'ouverture et la fermeture de la modal de récupération de mot de passe
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modal de récupération de mot de passe
  const openModal = () => setIsModalOpen(true);

  // Fonction pour fermer la modal
  const closeModal = () => setIsModalOpen(false);

  // Gestionnaire pour déclencher l'ouverture de la modal avec la touche "Enter" ou "Espace"
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      openModal();
    }
  };

  return (
    <>
      {/* Formulaire de connexion */}
      <form onSubmit={handleSubmitLogin} className="loginform__signin-form">
        {/* Champ pour le nom d'utilisateur avec gestion d'erreur */}
        <AuthForm
          label="Nom d'utilisateur :"
          type="text"
          placeholder="Entrez votre nom d'utilisateur"
          value={formData.username} // Valeur actuelle du champ
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          } // Met à jour l'état formData
          error={errors.username} // Affiche l'erreur correspondante si présente
        />

        {/* Champ pour le mot de passe avec gestion d'erreur */}
        <AuthForm
          label="Mot de passe :"
          type="password"
          placeholder="Entrez votre mot de passe"
          value={formData.password} // Valeur actuelle du champ
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          } // Met à jour l'état formData
          error={errors.password} // Affiche l'erreur correspondante si présente
        />

        {/* Afficher un message d'erreur général si le couple username/mot de passe n'est pas bon */}
        {errors.api && (
          <div className="loginform__error-message">
            <p style={{ color: "red" }}>{errors.api}</p>
          </div>
        )}

        {/* Bouton de soumission */}
        <div className="loginform__submit">
          <div className="authmodal__submit-btn">
            <Button
              text="Connexion"
              type="submit"
              style={{
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                backgroundColor: "var(--clr-intense-green)",
                padding: "0.5rem 1rem",
              }}
            />
          </div>

          {/* Lien pour ouvrir la modal de récupération de mot de passe */}
          <div
            className="loginform__forgot-password"
            id="forgot-password-link"
            tabIndex="0"
            role="button"
            onClick={openModal}
            onKeyPress={handleKeyPress}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Mot de passe oublié ?
          </div>
        </div>
      </form>

      {/* Composant ModalForgetPassword */}
      <ModalForgetPassword isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

LoginForm.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    api: PropTypes.string,
  }),
  handleSubmitLogin: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  errors: {
    username: "",
    password: "",
    general: "", // Par défaut, pas d'erreur générale
  },
};

export default LoginForm;
