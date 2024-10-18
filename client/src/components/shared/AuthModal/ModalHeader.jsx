import PropTypes from "prop-types";
import "../styles/Authmodal/ModalHeader.css";
import PinkCross from "../../svg/PinkCross"; // Importation du SVG personnalisé

// Gestion du header de la modal, y compris le bouton de fermeture
function ModalHeader({ closeModal }) {
  return (
    <>
      {/* Section du SVG PinkCross en haut de la modal */}
      <div className="authmodal__header-pinkcross">
        <PinkCross />{" "}
        {/* SVG affiché dans le header, stylisé indépendamment du bouton */}
      </div>

      {/* Header contenant le bouton de fermeture de la modal */}
      <div className="authmodal__header">
        <button
          type="button"
          className="authmodal__close-btn" // Bouton stylisé pour fermer la modal
          onClick={closeModal}
          // Appel de la fonction closeModal passée en prop lorsque l'utilisateur clique sur "X"
        >
          X {/* Symbole de fermeture visible */}
        </button>
      </div>
    </>
  );
}

// Validation des props avec PropTypes
ModalHeader.propTypes = {
  closeModal: PropTypes.func.isRequired, // closeModal doit être une fonction et est obligatoire
};

export default ModalHeader;
