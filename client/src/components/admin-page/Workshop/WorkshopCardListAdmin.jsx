import PropTypes from "prop-types";
import { useState, useContext } from "react";
import "./styles/WorkshopCardListAdmin.css";
import WorkshopCardAdmin from "./WorkshopCardAdmin";
import Button from "../../shared/Button";

// Context
import { AdminWorkshopContext } from "../../../context/AdminWorkshopContext";

function WorkshopCardListAdmin({ onWorkshopCardClick }) {
  const [visibleCount, setVisibleCount] = useState(6);
  // Afficher 6 cards de plus :
  const handleShowMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  const { workshopData, workshopIsLoading } = useContext(AdminWorkshopContext);
  if (workshopIsLoading) return "loading";

  // Vérification si `workshopData` est défini et s'il s'agit bien d'un tableau
  if (!workshopData || !Array.isArray(workshopData)) {
    return <p>No workshops available</p>;
  }

  return (
    <div className="workshop-cardlist-admin">
      <ul className="workshop-cardlist-admin__list">
        {workshopData.slice(0, visibleCount).map((workshop) => (
          <li
            className="workshop-cardlist-admin__list-item"
            key={workshop.workshop_id}
            onClick={() => onWorkshopCardClick(workshop.workshop_id)}
            aria-hidden="true"
          >
            <WorkshopCardAdmin
              title={workshop.title}
              nbSection={workshop.video_count}
            />
          </li>
        ))}
      </ul>
      {visibleCount < workshopData.length && (
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

WorkshopCardListAdmin.propTypes = {
  onWorkshopCardClick: PropTypes.func.isRequired,
};
export default WorkshopCardListAdmin;
