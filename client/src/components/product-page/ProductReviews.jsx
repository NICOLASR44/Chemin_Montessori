import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./styles/ProductReviews.css";

function ProductReviews() {
  const { commentData, commentIsLoading } = useContext(ProductContext);
  console.info("comment data,", commentData);

  if (commentIsLoading) return "loading";

  return (
    <div className="productReviews__container">
      {commentData.map((review) => (
        <div key={review.id} className="productReviews__card">
          <div className="productReviews__profil">
            <img
              className="productReviews__profil-img"
              src={`http://localhost:3310/${review.avatar}`}
              alt={`${review.username} profil`}
            />
            <h3 className="productReviews__profil-userName">
              {review.username}
            </h3>
          </div>
          <p className="productReviews__review">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductReviews;
