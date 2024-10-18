import PropTypes from "prop-types";
import "./styles/WorkshopCardAdmin.css";
import DeleteButton from "../../svg/DeleteButton";

function WorkshopCardAdmin({
  title,
  nbSection,
  onDelete,
  onClick,
  showDeleteButton = false,
}) {
  return (
    <div className="workshop-card-admin" aria-hidden="true" onClick={onClick}>
      <h3 className="workshop-card-admin__title">{title}</h3>
      <div className="workshop-card-admin__sections">
        Nombre de sections: {nbSection}
      </div>
      {showDeleteButton && (
        <DeleteButton
          height={17}
          width={15}
          className="workshop-card-admin__delete"
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

WorkshopCardAdmin.propTypes = {
  title: PropTypes.string.isRequired,
  nbSection: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  showDeleteButton: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
};

WorkshopCardAdmin.defaultProps = {
  onClick: () => {},
  onDelete: () => {},
};

export default WorkshopCardAdmin;
