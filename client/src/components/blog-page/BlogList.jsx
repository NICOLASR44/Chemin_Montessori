import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import BlogCard from "./BlogCard";
import PinkSpirale from "../svg/PinkSpirale";
import "./styles/BlogList.css";
import { mdToHTML } from "../../functions/parseContent";

const formatDate = (dateString) => {
  const date = new Date(dateString); // Format français : jour/mois/année
  return date.toLocaleDateString("fr-FR");
};

function BlogList() {
  const { blogData, blogIsLoading, blogError } = useContext(BlogContext); // Consommation du contexte
  const [currentPage, setCurrentPage] = useState(0); // Page actuelle
  const blogsPerPage = 3; // Nombre d'éléments par page
  const navigate = useNavigate();

  // Vérifier si les données sont en cours de chargement ou si une erreur est survenue
  if (blogIsLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (blogError) {
    return <p>Erreur lors du chargement des blogs...</p>;
  }

  // Si les données sont disponibles, calculer le nombre total de pages
  const totalPages = Math.ceil((blogData?.length || 0) / blogsPerPage);

  // Fonction pour récupérer les éléments actuels
  const currentBlogs =
    blogData?.slice(
      currentPage * blogsPerPage,
      (currentPage + 1) * blogsPerPage
    ) || [];

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    if (currentPage + 1 < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fonction pour revenir à la page précédente
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Pour se rendre sur la page produit correspondant à l'ID :
  const handleCardClick = (id) => {
    window.scrollTo(0, 0);
    navigate(`/blog-article/${id}`);
  };

  return (
    <div className="blog-list">
      <section className="bloc-list__section">
        {currentBlogs.map((Blog) => (
          <BlogCard
            key={Blog.id}
            image={`http://localhost:3310/${Blog.image}`}
            title={Blog.title}
            date={formatDate(Blog.published_date)}
            description={mdToHTML(Blog.content)}
            onClick={() => handleCardClick(Blog.id)}
          />
        ))}
      </section>
      <div className="blog-list__page-arrow-svg">
        <div className="blog-list__page-arrow">
          <button
            type="button"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="blog-list__arrow"
          >
            🠐
          </button>
          <p className="blog-list__p">
            Page {currentPage + 1} / {totalPages}
          </p>
          <button
            type="button"
            onClick={nextPage}
            disabled={currentPage + 1 >= totalPages}
            className="blog-list__arrow"
          >
            🠒
          </button>
        </div>
        <div className="blog-list__svg">
          <PinkSpirale />
        </div>
      </div>
    </div>
  );
}

export default BlogList;
