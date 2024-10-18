import PropTypes from "prop-types";
import "./styles/AdminblogCardContainer.css";
import DeleteButton from "../../svg/DeleteButton";

function AdminBlogCardContainer({
  title,
  onClick,
  onDelete,
  showDeleteButton = false,
}) {
  return (
    <div>
      <div
        className="admin-blog-card-container"
        aria-hidden="true"
        onClick={onClick}
      >
        <h3 className="admin-blog-card-container__title">{title}</h3>

        {showDeleteButton && (
          <DeleteButton
            height={17}
            width={15}
            className="admin-review-card__delete"
            onClick={onDelete}
          />
        )}
      </div>
    </div>
  );
}

AdminBlogCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func, // Fonction de suppression (optionnelle si showDeleteButton est false)
  showDeleteButton: PropTypes.bool.isRequired,
};

AdminBlogCardContainer.defaultProps = {
  onClick: () => {},
  onDelete: () => {},
};

export default AdminBlogCardContainer;
