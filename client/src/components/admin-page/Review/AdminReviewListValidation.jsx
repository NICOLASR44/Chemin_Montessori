import { useContext } from "react";
// import PropTypes from "prop-types"; // Import de PropTypes
import AdminReviewCardValidation from "./AdminReviewCardValidation";
import "./styles/AdminReviewListValidation.css";
import { AdminCommentContext } from "../../../context/AdminCommentContext";

function AdminReviewListValidation() {
  const { commentNotActiveData, commentNotActiveIsLoading } =
    useContext(AdminCommentContext);

  if (commentNotActiveIsLoading) return "loading";

  return (
    <section className="admin-review-list-validation">
      {commentNotActiveData.map((review) => (
        <AdminReviewCardValidation
          key={review.id}
          profileImage={`http://localhost:3310/${review.avatar}`}
          userName={review.username}
          comment={review.comment}
          workshopTitle={review.workshop_title}
          commentId={review.id}
        />
      ))}
    </section>
  );
}

AdminReviewListValidation.propTypes = {};

export default AdminReviewListValidation;
