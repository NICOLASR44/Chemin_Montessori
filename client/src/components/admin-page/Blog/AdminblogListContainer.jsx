import PropTypes from "prop-types";
import { useState, useContext } from "react";
import "./styles/AdminblogListContainer.css";
import AdminblogCardContainer from "./AdminblogCardContainer";
import Button from "../../shared/Button";

// Context
import { BlogContext } from "../../../context/BlogContext";

function AdminblogListContainer({ onBlogCardClick }) {
  const [visibleCount, setVisibleCount] = useState(6);
  // Afficher 6 cards de plus :
  const handleShowMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  const { blogData, blogIsLoading } = useContext(BlogContext);
  if (blogIsLoading) return "loading";

  // Vérification si `blogData` est défini et s'il s'agit bien d'un tableau
  if (!blogData || !Array.isArray(blogData)) {
    return <p>No blogs articles available</p>;
  }

  return (
    <div className="admin-blog-list-container">
      <ul className="admin-blog-list-container__list">
        {blogData.slice(0, visibleCount).map((blog) => (
          <li
            className="admin-blog-list-container__list-item"
            key={blog.blog_id}
            onClick={() => onBlogCardClick(blog.id)}
            aria-hidden="true"
          >
            <AdminblogCardContainer title={blog.title} />
          </li>
        ))}
      </ul>
      {visibleCount < blogData.length && (
        <Button
          onClick={handleShowMore}
          text="Voir plus"
          style={{
            backgroundColor: "var(--clr-yellow)",
            margin: "0 auto",
            display: "block",
            alignSelf: "center",
          }}
        />
      )}
    </div>
  );
}

AdminblogListContainer.propTypes = {
  onBlogCardClick: PropTypes.func.isRequired,
};
export default AdminblogListContainer;
