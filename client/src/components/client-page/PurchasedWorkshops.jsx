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

function PurchasedWorkshops() {
  // Récupération des données depuis le WorkshopContext
  const {
    purchasedWorkshopData,
    purchasedWorkshopLoading,
    purchasedWorkshopError,
  } = useContext(UserContext);

  const { someVisibleCount, handleShowSomeMore } = useWorkshopFilter(
    purchasedWorkshopData || []
  );

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    window.scrollTo(0, 0);
    navigate(`/produit/${id}`);
  };

  if (purchasedWorkshopLoading)
    return <div>Chargement des ateliers achetés...</div>;
  if (purchasedWorkshopError)
    return <div>Erreur lors du chargement des ateliers achetés.</div>;

  return (
    <div className="client__workshop-list">
      <ul className="client__workshop-list-ul">
        {purchasedWorkshopData && purchasedWorkshopData.length > 0 ? (
          purchasedWorkshopData
            .slice(0, someVisibleCount)
            .map((workshop) => (
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
            ))
        ) : (
          <div>Aucun atelier acheté disponible</div>
        )}
      </ul>
      {someVisibleCount < purchasedWorkshopData.length && (
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

export default PurchasedWorkshops;
