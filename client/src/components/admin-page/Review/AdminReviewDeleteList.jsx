import { useContext } from "react";
import "./styles/AdminReviewDeleteList.css";
import AdminReviewCard from "./AdminReviewCard";
import AdminFilter from "../shared/AdminFilter";
import { AdminCommentContext } from "../../../context/AdminCommentContext";

// Context
// import { AdminreviewContext } from "../../../context/AdminreviewContext";

function AdminReviewDeleteList() {
  const { commentData, commentIsLoading } = useContext(AdminCommentContext);
  const { setShowModal, setCurrentAction, setCurrentId } =
    useContext(AdminCommentContext);

  // Fonction pour supprimer un avis
  const handleDelete = (currentId) => {
    setCurrentAction("Supprimer");
    setCurrentId(currentId);
    setShowModal(true);
  };

  if (commentIsLoading) return "loading";
  return (
    <div>
      <AdminFilter />
      <div className="admin-review-delete-list">
        {commentData.map((review) => (
          <AdminReviewCard
            key={review.id}
            profileImage={`http://localhost:3310/${review.avatar}`}
            userName={review.username}
            comment={review.comment}
            onClick={() => handleDelete(review.id)}
            showDeleteButton
          />
        ))}
      </div>
    </div>
  );
}

AdminReviewDeleteList.propTypes = {};

AdminReviewDeleteList.propTypes = {};
export default AdminReviewDeleteList;
