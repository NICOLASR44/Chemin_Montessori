import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "../../shared/Button";
import Upload from "../../shared/Upload";
import "./styles/AdminBogValidation.css";

function AdminBlogValidation({ onSectionChange }) {
  // Destructuration ici

  const [blogData, setBlogData] = useState({
    title: "",
  });

  useEffect(() => {
    if (onSectionChange) {
      onSectionChange("newBlogData"); // Remonte les données à chaque changement
    }
  }, [blogData, onSectionChange]); // Inclure onSectionChange comme dépendance

  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, type, files } = event.target;

      setBlogData((prevState) => ({
        ...prevState,
        [name]: type === "file" ? files[0] : event.target.value,
      }));
    } else {
      console.error("L'événement ou event.target est indéfini.");
    }
  };

  return (
    <div className="admin-blog-validation">
      <input
        className="admin-blog-validation__input-title"
        type="text"
        placeholder="Liberté en fleur"
        name="title"
        onChange={handleInputChange} // Ne pas oublier d'ajouter handleInputChange ici
      />
      <section className="admin-blog-validation__section">
        <textarea
          className="admin-blog-validation__section-input"
          type="text"
          placeholder="L’enfant explore,Main douce guide le savoir,Liberté en fleur."
          name="text"
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
              onChange={handleInputChange}
              inputName="image"
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
              text="Publier"
              style={{
                fontSize: "0.875rem",
                backgroundColor: "var(--clr-intense-green)",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

AdminBlogValidation.propTypes = {
  onSectionChange: PropTypes.func.isRequired,
};

export default AdminBlogValidation;
