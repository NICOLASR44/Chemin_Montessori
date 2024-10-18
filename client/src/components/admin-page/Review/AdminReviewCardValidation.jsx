import { useContext } from "react";
import PropTypes from "prop-types";
import "./styles/AdminReviewCardValidation.css";
import Button from "../../shared/Button";
import { AdminCommentContext } from "../../../context/AdminCommentContext";

function AdminReviewCardValidation({
  profileImage,
  userName,
  comment,
  workshopTitle,
  commentId,
}) {
  const { setCurrentAction, setShowModal, setCurrentId } =
    useContext(AdminCommentContext);

  const handleValidate = (id) => () => {
    setCurrentAction("Valider");
    setCurrentId(id);
    setShowModal(true);
  };

  const handleDelete = (id) => () => {
    setCurrentAction("Supprimer");
    setCurrentId(id);
    setShowModal(true);
  };

  return (
    <div className="admin-review-card-validation__container">
      <div className="admin-review-card-validation__card">
        <div className="admin-review-card-validation__profil">
          <img
            className="admin-review-card-validation__profil-img"
            src={profileImage}
            alt={`${userName} profile`}
          />
          <h3 className="admin-review-card-validation__profil-userName">
            {userName}
          </h3>
        </div>
        <p className="admin-review-card-validation__review">{comment}</p>
      </div>
      <div className="admin-review-card-validation__title-button">
        <h4 className="admin-review-card-validation__title">{workshopTitle}</h4>
        <div className="admin-review-card-validation__double-button">
          <Button
            text="Valider"
            style={{
              backgroundColor: "var(--clr-intense-green)",
              border: "none",
              borderRadius: "1.25rem",
              padding: "0.4rem 1.7rem",
              fontSize: "1.1rem",
            }}
            onClick={handleValidate(commentId)}
          />
          <Button
            text="Supprimer"
            style={{
              backgroundColor: "rgb(224,61,61)",
              border: "none",
              borderRadius: "1.25rem",
              padding: "0.4rem 1.7rem",
              fontSize: "1.1rem",
            }}
            onClick={handleDelete(commentId)}
          />
        </div>
      </div>
    </div>
  );
}

AdminReviewCardValidation.propTypes = {
  profileImage: PropTypes.string,
  userName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  workshopTitle: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
};

// Définition des defaultProps
AdminReviewCardValidation.defaultProps = {
  profileImage: "path/to/default/image.jpg",
};

export default AdminReviewCardValidation;
