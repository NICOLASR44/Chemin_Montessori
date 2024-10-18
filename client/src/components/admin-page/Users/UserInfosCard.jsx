import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./styles/UserInfosCard.css";
import axios from "axios";
import { format, parseISO } from "date-fns";
import CloseButton from "../../svg/CloseButton";
// Context
import { AdminUserContext } from "../../../context/AdminUserContext";
import { AdminUserFullDataProvider } from "../../../context/AdminUserFullDataContext";
import UserActivityList from "./UserActivityList";

// Il reste à lier à la BDD avec context et mettre à jour fieldset avec declanchement modale pour valider le PUT

function UserInfosCard({ userId, onClose }) {
  const { userData, userIsLoading } = useContext(AdminUserContext);
  const [selectedRole, setSelectedRole] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const selectedUser = userData.find((user) => user.id === userId);
  if (!selectedUser) {
    return (
      <div>Désolé, aucun utilisateur ne correspond à votre recherche.</div>
    );
  }
  const currentId = selectedUser.id;

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await axios.put(
        `http://localhost:3310/api/user/${currentId}`,
        {
          status: selectedRole,
        }
      );

      if (response.status === 201) {
        alert("Statut mis à jour avec succès");
      } else {
        throw new Error("Erreur lors de la mise à jour du statut");
      }
    } catch (error) {
      console.error(error);
      console.error("Erreur : le statut n'a pas pu être mis à jour");
    } finally {
      setIsSaving(false);
    }
  };

  if (userIsLoading) return "loading";

  const roles = ["active", "inactive", "banned", "admin"];

  return (
    <div className="user-infos-card">
      <form onSubmit={handleSubmit}>
        <CloseButton className="user-infos-card-close" onClick={onClose} />
        <div className="user-infos-card__personnal-infos">
          <img
            className="user-infos-card__img"
            src={`http://localhost:3310/${selectedUser.avatar}`}
            alt={selectedUser.username}
          />
          <div className="user-infos-card__user">
            <p className="user-infos-card__user-username">
              {selectedUser.username}
            </p>
            <p className="user-infos-card__user-created-on">
              Membre depuis le{" "}
              {format(parseISO(selectedUser.created_on), "dd/MM/yyyy")}
            </p>
          </div>
          <div className="user-infos-card__status">
            <div>Statut actuel : {selectedUser.status}</div>
            <div className="user-infos-card__status-option-container">
              <p>Rôle :</p>
              <fieldset className="user-infos-card__status-fieldset">
                <select
                  className="user-infos-card__status-select"
                  name="menu"
                  value={selectedRole.status}
                  onChange={handleRoleChange}
                >
                  <option value={selectedRole.status}>Sélectionner</option>
                  {roles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="user-infos-card__infos">
          <AdminUserFullDataProvider id={currentId}>
            <div className="user-infos-card__activity-container">
              <UserActivityList activityType="orders" />
              <UserActivityList activityType="comments" />
              <button className="user-infos-card__submit-button" type="submit">
                {isSaving
                  ? "Changements en cours..."
                  : "Valider les changements"}
              </button>
            </div>
          </AdminUserFullDataProvider>
        </div>
      </form>
    </div>
  );
}

UserInfosCard.propTypes = {
  userId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default UserInfosCard;
