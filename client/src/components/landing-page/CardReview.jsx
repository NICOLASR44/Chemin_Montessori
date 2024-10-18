import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";

import "./styles/CardReview.css";

function CardReview({ imgSrc, clientName, publishedDate, comment }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/ateliers");
    window.scrollTo(0, 0);
  };

  return (
    <article className="card-review">
      <div className="card-review__flex-container">
        <img src={imgSrc} alt="Avatar du client" />
        <div className="card-review__name">{clientName}</div>
        <div className="card-review__date">{publishedDate}</div>
      </div>
      <p className="card-review__p">{comment}</p>
      <Button
        text="voir +"
        onClick={handleNavigation}
        style={{
          backgroundColor: "var(--clr-light-green",
          alignSelf: "flex-end",
          marginTop: "auto",
        }}
      />
    </article>
  );
}

CardReview.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};
export default CardReview;
