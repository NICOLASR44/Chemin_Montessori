// Hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Custom Hooks
import useWorkshopFilter from "../../hooks/useFilterWorkshop";

// Components
import WorkshopCard from "../shared/WorkshopCard";

// Contextes
import { UserContext } from "../../context/UserContext";
import { calculateCost } from "../../functions/calculateCost";
import Button from "../shared/Button";
import StarEmpty from "../svg/StarEmpty";

function SuggestedWorkshops() {
  const {
    suggestedWorkshopData,
    suggestedWorkshopLoading,
    suggestedWorkshopError,
  } = useContext(UserContext);

  const { someVisibleCount, handleShowSomeMore } = useWorkshopFilter(
    suggestedWorkshopData || []
  );

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    window.scrollTo(0, 0);
    navigate(`/produit/${id}`);
  };

  if (suggestedWorkshopLoading) return "loading";
  if (suggestedWorkshopError) return "error";

  return (
    <div className="client__workshop-list">
      <StarEmpty className="client__workshop-svg" />
      <ul className="client__workshop-list-ul">
        {suggestedWorkshopData.slice(0, someVisibleCount).map((workshop) => (
          <li key={workshop.id}>
            {workshop.id ? (
              <WorkshopCard
                imgSrc={`http://localhost:3310/${workshop.image}`}
                price={calculateCost(workshop.price_ht, workshop.tva)}
                title={workshop.title}
                onClick={() => handleCardClick(workshop.id)}
              />
            ) : (
              <div>Atelier sans ID</div>
            )}
          </li>
        ))}
      </ul>
      {someVisibleCount < suggestedWorkshopData.length && (
        <Button
          onClick={handleShowSomeMore}
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

SuggestedWorkshops.propTypes = {};

export default SuggestedWorkshops;
