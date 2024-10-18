import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import Button from "../../shared/Button";
import Upload from "../../shared/Upload";
import "./styles/AdminBogValidation.css";

// Context
import { BlogContext } from "../../../context/BlogContext";

function BlogUpdateForm({ blogId }) {
  // Destructuration ici

  const { blogData, blogIsLoading, handleUpdateBlog } = useContext(BlogContext);

  const selectedblog = blogData.find((blog) => blog.id === blogId);

  const [updatedBlog, setUptadedBlog] = useState({
    title: "",
    blog_image: "",
    content: "",
  });

  useEffect(() => {
    if (selectedblog) {
      setUptadedBlog({
        title: selectedblog.title || "",
        blog_image: selectedblog.image || "",
        content: selectedblog.content || "",
      });
    }
  }, [selectedblog]);

  if (!selectedblog) {
    return <div>blog not found</div>;
  }
  if (blogIsLoading) return "loading";

  const handleBlogChange = (updatedBlogData) => {
    setUptadedBlog((prev) => ({
      ...prev,
      ...updatedBlogData,
    }));
  };

  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, type, files } = event.target;

      setUptadedBlog((prevState) => ({
        ...prevState,
        [name]: type === "file" ? files[0] : event.target.value,
      }));
    } else {
      console.error("L'événement ou event.target est indéfini.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", updatedBlog.title);
    formData.append("content", updatedBlog.content);
    formData.append("blog_image", updatedBlog.blog_image);

    try {
      await handleUpdateBlog(blogId, formData);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la ressource:", error);
    }
  };

  return (
    <form
      method="put"
      action="#"
      encType="multipart/form-data"
      className="admin-blog-validation"
      onSubmit={handleSubmit}
    >
      <input
        id=""
        name="title"
        className="admin-blog-validation__input-title"
        type="text"
        value={updatedBlog.title}
        placeholder="Liberté en fleur"
        onChange={handleInputChange} // Ne pas oublier d'ajouter handleInputChange ici
      />
      <section className="admin-blog-validation__section">
        <textarea
          id=""
          name="content"
          value={updatedBlog.content}
          className="admin-blog-validation__section-input"
          type="text"
          onChange={handleInputChange} // Ajout de handleInputChange ici aussi
        />
        <div className="admin-blog-validation__format-upload-button">
          <div className="admin-blog-validation__format-upload">
            <div className="admin-blog-validation__format-button-title">
              <p className="admin-blog-validation__format-title">
                Formatter le texte :
              </p>
              <h1 className="admin-blog-validation__button-span-h1"># Titre</h1>
              <h2 className="admin-blog-validation__button-span-h2">
                ## Titre
              </h2>
            </div>
            <Upload
              onChange={(updatedBlogData) => handleBlogChange(updatedBlogData)}
              inputName="blog_image"
              style={{
                padding: "1.5rem 2.6rem",
              }}
            />
          </div>
          <div className="admin-blog-validation__button-input-texte">
            <Button
              text="Effacer le contenu"
              style={{
                fontSize: "0.875rem",
                backgroundColor: "var(--clr-white)",
                color: "var(--clr-grey)",
                boxShadow: "none",
                fontWeight: "500",
              }}
            />
            <Button
              text="Modifier"
              type="submit"
              onClick={handleSubmit}
              style={{
                fontSize: "0.875rem",
                backgroundColor: "var(--clr-intense-green)",
              }}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

BlogUpdateForm.propTypes = {
  blogId: PropTypes.number.isRequired,
};
export default BlogUpdateForm;
