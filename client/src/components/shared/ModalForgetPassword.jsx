import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./styles/ModalForgetPassword.css";
import SpringGrenn from "../svg/SpringGreen";

function ModalForgetPassword({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (inputEmail) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(inputEmail);
  };

  const handleSend = () => {
    if (!email) {
      setError("Veuillez entrer une adresse e-mail.");
    } else if (!validateEmail(email)) {
      setError("Veuillez entrer une adresse e-mail valide.");
    } else {
      setError("");
      setEmailSent(true);
      // Afficher une notification visuelle à la place de l'alerte
      // La modal se ferme après l'envoi de l'email
      // Après 5 secondes, réinitialiser le formulaire et le message
      setTimeout(() => {
        setEmail("");
        setEmailSent(false);
      }, 10000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modalforgetpassword">
      <div className="modalforgetpassword__content">
        <div className="modalforgetpassword__content-svg">
          <SpringGrenn />
        </div>

        <h2 className="modalforgetpassword__title">
          Formulaire de réinitialisation
        </h2>
        {!emailSent ? (
          <>
            <p className="modalforgetpassword__description">
              Veuillez entrer votre adresse email pour recevoir votre lien de
              réinitialisation.
            </p>
            <input
              className="modalforgetpassword__input"
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <div className="modalforgetpassword__buttons">
              <Button
                text="Annuler"
                type="button"
                onClick={onClose}
                style={{
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                  backgroundColor: "red",
                  padding: "0.5rem 1rem",
                }}
              />
              <Button
                text="Envoyer"
                type="button"
                onClick={handleSend}
                style={{
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                  backgroundColor: "var(--clr-intense-green)",
                  padding: "0.5rem 1rem",
                }}
              />
            </div>
          </>
        ) : (
          <p className="modalforgetpassword__email-sent-msg">
            Merci. Un email de réinitialisation a été envoyé à {email}.
          </p>
        )}
      </div>
    </div>
  );
}

ModalForgetPassword.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalForgetPassword;
