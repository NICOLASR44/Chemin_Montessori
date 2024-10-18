// import PropTypes from "prop-types";
import { useState, useContext } from "react";
import "./styles/WorkshopCardDeleteListAdmin.css";
import WorkshopCardAdmin from "./WorkshopCardAdmin";
import Button from "../../shared/Button";
import Modal from "../shared/Modal";

// Context
import { AdminWorkshopContext } from "../../../context/AdminWorkshopContext";

function WorkshopCardDeleteListAdmin() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState(null);

  // Afficher 6 cards de plus :
  const handleShowMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  const { handleDeleteWorkshop, workshopData, workshopIsLoading } =
    useContext(AdminWorkshopContext);
  if (workshopIsLoading) return "loading";

  const handleShowDeleteModal = (workshopId) => {
    setSelectedWorkshopId(workshopId);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedWorkshopId) {
      handleDeleteWorkshop(selectedWorkshopId);
      setShowModal(false);
    }
  };

  return (
    <div className="workshop-card_deletelist-admin">
      <ul className="workshop-card_deletelist-admin__list">
        {workshopData.slice(0, visibleCount).map((workshop) => (
          <li
            className="workshop-card_deletelist-admin__list-item"
            key={workshop.workshop_id}
          >
            <WorkshopCardAdmin
              title={workshop.title}
              nbSection={workshop.video_count}
              onClick={() => handleShowDeleteModal(workshop.workshop_id)}
              onDelete={handleShowDeleteModal}
              showDeleteButton
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
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        actiontext="supprimer cet atelier ainsi que les ressources et vidéos associés?"
        validateButton="Supprimer"
        onValidate={handleConfirmDelete}
      />
    </div>
  );
}

WorkshopCardDeleteListAdmin.propTypes = {};
export default WorkshopCardDeleteListAdmin;
