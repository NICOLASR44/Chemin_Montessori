/* eslint-disable react/no-danger */

import PropTypes from "prop-types";
import "./styles/BlogCard.css";
import Button from "../shared/Button";

export default function BlogCard({ image, title, date, description, onClick }) {
  const shortDescription =
    description.length > 500 ? `${description.slice(0, 500)}...` : description;

  return (
    <div className="blog-cards">
      <div className="blog-cards__header">
        <div className="blog-cards__bloc-img">
          <img
            src={image}
            alt={title}
            className="blog-cards__img"
            onClick={onClick}
            aria-hidden="true"
          />
        </div>
        <div className="blog-cards__container">
          <h3 className="blog-cards__title">{title}</h3>
          <p
            className="blog-cards__p"
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          />
          <div className="blog-cards__button-date">
            <div
              className="blog-cards__button"
              onClick={onClick}
              aria-hidden="true"
            >
              <Button
                text="en voir plus"
                style={{
                  background: "var(--clr-intense-green)",
                  width: "10.4375rem",
                  padding: "0.3rem 1.25em",
                }}
              />
            </div>
            <span className="blog-cards__date">Publié le {date}</span>
          </div>
        </div>
      </div>
      <hr className="grey-line" />
    </div>
  );
}

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};
