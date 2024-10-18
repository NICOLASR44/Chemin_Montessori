import PropTypes from "prop-types";
import "./styles/AdminModal.css";

function AdminModal({
  actiontext,
  validateButton,
  show,
  onClose,
  onValidate,
  irreversible = "true",
}) {
  if (!show) return null;

  return (
    <div className="admin-modal">
      <div className="admin-modal__container">
        <p className="admin-modal__content">
          Êtes-vous sûr de vouloir {actiontext}
        </p>
        {irreversible && (
          <p className="admin-modal__content-irresversible">
            Cette action est irréversible.
          </p>
        )}
        <div className="admin-modal__button-container">
          <button
            className="admin-modal__back-button"
            type="button"
            onClick={onClose}
          >
            Revenir
          </button>
          <button
            className="admin-modal__validate-button"
            type="submit"
            onClick={onValidate}
          >
            {validateButton}
          </button>
        </div>
      </div>
    </div>
  );
}

AdminModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  actiontext: PropTypes.string.isRequired,
  validateButton: PropTypes.string.isRequired,
  onValidate: PropTypes.func.isRequired,
  irreversible: PropTypes.bool.isRequired,
};
export default AdminModal;
