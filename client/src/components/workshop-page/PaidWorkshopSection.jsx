// Hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

// Custom Hooks
import useWorkshopFilter from "../../hooks/useFilterWorkshop";
import useAnimation from "../../hooks/useAnimation";

// Context
import { WorkshopContext } from "../../context/WorkshopContext";

// Utils
import { calculateCost } from "../../functions/calculateCost";

// Components
import WorkshopCard from "../shared/WorkshopCard";
import Button from "../shared/Button";
import Title from "../shared/Title";
import Filter from "../shared/Filter";
import Splash from "../svg/Splash";

// CSS
import "../../pages/styles/Workshop.css";

export default function PaidWorkshopSection() {
  const { paidVideoData, paidVideoIsLoading } = useContext(WorkshopContext);

  const { slideInTop } = useAnimation();

  useGSAP(() => {
    slideInTop(".paidWorkshop");
  }, []);

  // Fonctions utilitaires
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    window.scrollTo(0, 0);
    navigate(`/produit/${id}`);
  };

  const {
    visibleCount,
    filteredWorkshops,
    handleShowMore,
    handleSearch,
    handleFilterChange,
    handleReset,
    searchTerm,
    typeFilter,
  } = useWorkshopFilter(paidVideoData || []);

  if (paidVideoIsLoading) return "Loading";

  return (
    <div className="paidWorkshop">
      <div className="workshop__expert">
        <Splash className="workshop__expert-svg-splash" />
        <Title boldText="Devenez experts avec nos" italicText="Ateliers" />
        <Filter
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          typeFilter={typeFilter}
          handleFilterChange={handleFilterChange}
          handleReset={handleReset}
        />
      </div>
      <div className="workshop__expert-list-container">
        <ul className="workshop__expert-list-ul">
          {filteredWorkshops.slice(0, visibleCount).map((workshop) => (
            <li key={workshop.id}>
              <WorkshopCard
                imgSrc={`http://localhost:3310/${workshop.image}`}
                price={calculateCost(workshop.price_ht, workshop.tva)}
                title={workshop.title}
                onClick={() => handleCardClick(workshop.id)}
              />
            </li>
          ))}
        </ul>
        {visibleCount < paidVideoData.length && (
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
    </div>
  );
}

PaidWorkshopSection.propTypes = {};
