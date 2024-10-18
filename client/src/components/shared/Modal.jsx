import PropTypes from "prop-types";
import Button from "./Button";
import "./styles/Modal.css";
import Flower9 from "../svg/Flower9";

// Utilisation de la Modal : Cette modal permet la modification de la bordure en rouge quand il s'agit d'un message d'erreur grace à la props Borderclass
// setBorderClass("error-border") pour la bordure rouge et setBorderClass("good-border");pour la bordure classique;//

function Modal({ show, onClose, message, borderClass }) {
  if (!show) return null;

  return (
    <div className="modal">
      <div className={`modal__content ${borderClass}`}>
        <div className="modal__flowers">
          <Flower9 width="40px" height="auto" />
          <Flower9 width="40px" height="auto" />
          <Flower9 width="40px" height="auto" />
        </div>
        <div className="modal__message">
          <p>{message}</p>
        </div>
        <div className="modal__button">
          <Button
            text="Fermer"
            onClick={onClose}
            style={{
              fontSize: "1rem",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--clr-pink)",
              padding: "0.5rem 1rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  borderClass: PropTypes.string.isRequired,
};

export default Modal;
