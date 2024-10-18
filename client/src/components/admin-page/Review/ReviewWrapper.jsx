import { useContext, useState } from "react";
import axios from "axios";
// import PropTypes from "prop-types";
import ControlSectionReview from "./ControlSectionReview";
import AdminReviewListValidation from "./AdminReviewListValidation";
import AdminReviewList from "./AdminReviewList";
import AdminReviewDeleteList from "./AdminReviewDeleteList";
import { AdminCommentContext } from "../../../context/AdminCommentContext";
import AdminModal from "../shared/Modal";

export default function ReviewWrapper() {
  const [control, setControl] = useState(2);
  const { showModal, setShowModal, currentAction, currentId } =
    useContext(AdminCommentContext);

  const handleValidate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3310/api/comment/status/${currentId}`,
        {
          is_active: 1,
        }
      );

      if (response.status === 201) {
        alert("Statut mis à jour avec succès");
        setShowModal(false);
      } else {
        throw new Error("Erreur lors de la mise à jour du statut");
      }
    } catch (error) {
      console.error(error);
      console.error("Erreur : le statut n'a pas pu être mis à jour");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3310/api/comment/${currentId}`
      );

      if (response.status === 204) {
        alert("Commentaire supprimé avec succès");
        setShowModal(false);
      }
    } catch (err) {
      console.error("Erreur lors de la suppression du commentaire : ");
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <ControlSectionReview control={control} setControl={setControl} />
        {control === 1 && <AdminReviewListValidation />}
        {control === 2 && <AdminReviewList />}
        {control === 3 && <AdminReviewDeleteList />}
      </div>
      <AdminModal
        show={showModal}
        validateButton={currentAction}
        actiontext={`${currentAction.toLowerCase()} ce commentaire ?`}
        onClose={() => setShowModal(false)}
        onValidate={
          currentAction === "Valider"
            ? () => handleValidate()
            : () => handleDelete()
        }
      />
    </>
  );
}

ReviewWrapper.propTypes = {};
