/* eslint-disable react/no-danger */

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../shared/Button";
import "./styles/BlogCard.css";

function BlogCard({ imgSrc, title, date, content }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/blog");
  };

  return (
    <div className="blog-card">
      <div className="blog-card__image-container">
        <img src={imgSrc} alt={title} className="blog-card__image" />
      </div>
      <div className="blog-card__text-container">
        <div className="blog-card__flex-container">
          <h3 className="blog-card__title">{title}</h3>
          <span className="blog-card__date">{date}</span>
        </div>
        <p
          className="blog-card__p"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Button
          text="Voir +"
          style={{
            backgroundColor: "var(--clr-light-green)",
            alignSelf: "flex-end",
            marginTop: "1rem",
          }}
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string,
};

BlogCard.defaultProps = {
  date: "Date non disponible",
};

export default BlogCard;
