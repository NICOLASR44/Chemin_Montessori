import { useContext } from "react";
// import PropTypes from "prop-types"; // Import de PropTypes
import AdminReviewCard from "./AdminReviewCard";
import "./styles/AdminReviewList.css";
import { AdminCommentContext } from "../../../context/AdminCommentContext";
import AdminFilter from "../shared/AdminFilter";

function AdminReviewList() {
  const { commentData, commentIsLoading } = useContext(AdminCommentContext);

  if (commentIsLoading) return "loading";

  return (
    <div>
      <AdminFilter />
      <section className="admin-review-list">
        {commentData.map((review) => (
          <AdminReviewCard
            key={review.id}
            profileImage={`http://localhost:3310/${review.avatar}`}
            userName={review.username}
            comment={review.comment}
          />
        ))}
      </section>
    </div>
  );
}

AdminReviewList.propTypes = {};

export default AdminReviewList;
