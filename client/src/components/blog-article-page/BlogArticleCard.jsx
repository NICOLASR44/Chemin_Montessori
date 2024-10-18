/* eslint-disable react/no-danger */

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/BlogArticleCard.css";
import Flower9 from "../svg/Flower9";
import PinkSpirale from "../svg/PinkSpirale";
import Button from "../shared/Button";

export default function BlogArticleCard({ image, title, date, description }) {
  return (
    <main className="blog-article-list">
      <div className="blog-article-list__header">
        <img
          src={image}
          alt="drawingchilds"
          className="blog-article-list__image"
        />
        <span className="blog-article-list__date">Publié le {date}</span>
      </div>

      <article className="blog-article-list__body">
        <div className="blog-article-list__svg">
          <Flower9 />
        </div>
        <div className="blog-article-list__content">
          <h3
            className="blog-article-list__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="blog-article-list__text"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </article>

      <div className="blog-article-list__spirale">
        <PinkSpirale />
      </div>
      <div className="blog-article-list__button">
        <Link to="/blog">
          <Button
            text="Revenir au blog"
            style={{
              alignSelf: "center",
              background: "var(--clr-intense-green)",
              width: "15.4375rem",
            }}
            className="blog-article-list__button-querry"
          />
        </Link>
      </div>
    </main>
  );
}

BlogArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
