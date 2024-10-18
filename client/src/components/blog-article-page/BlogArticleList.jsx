import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogArticleCard from "./BlogArticleCard";
import { mdToHTML } from "../../functions/parseContent";

const formatDate = (dateString) => {
  const date = new Date(dateString); // Format français : jour/mois/année
  return date.toLocaleDateString("fr-FR");
};

function BlogArticleList({ id }) {
  const [blogArticleData, setBlogArticleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/blog/${id}`)
      .then((response) => {
        setBlogArticleData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  // Gestion du chargement
  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  // Gestion des erreurs
  if (error) {
    return <p>Erreur lors du chargement de l'article de blog...</p>;
  }

  // Gestion si l'article n'existe pas
  if (!blogArticleData) {
    return <p>Aucun article de blog disponible.</p>;
  }

  return (
    <section>
      <BlogArticleCard
        key={blogArticleData.id}
        image={
          blogArticleData.image
            ? `http://localhost:3310/${blogArticleData.image}`
            : "default-image-path.jpg"
        }
        title={blogArticleData.title}
        date={formatDate(blogArticleData.published_date)}
        description={mdToHTML(blogArticleData.content)}
      />
    </section>
  );
}

BlogArticleList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BlogArticleList;
