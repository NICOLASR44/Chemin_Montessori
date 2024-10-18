import "./styles/AdminReviewCard.css";
import PropTypes from "prop-types";
import DeleteButton from "../../svg/DeleteButton";

function AdminReviewCard({
  profileImage,
  userName,
  comment,
  onClick,
  showDeleteButton = false,
}) {
  return (
    <div>
      <div className="admin-review-card__card">
        <div className="admin-review-card__profil">
          <img
            className="admin-review-card__profil-img"
            src={profileImage}
            alt={`${userName} profile`}
          />
          <h3 className="admin-review-card__profil-userName">{userName}</h3>
        </div>
        <p className="admin-review-card__review">{comment}</p>

        {showDeleteButton && (
          <DeleteButton
            height={17}
            width={15}
            className="admin-review-card__delete"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
}

AdminReviewCard.propTypes = {
  profileImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
};

export default AdminReviewCard;
