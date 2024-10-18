// Hooks
import { useState } from "react";

// Context
import { AdminUserFullDataProvider } from "../../../context/AdminUserFullDataContext";

// Components
import Title from "../../shared/Title";
import UsersFilter from "../shared/AdminFilter";
import UserCardList from "./UserCardList";
import UserInfosCard from "./UserInfosCard";

// CSS
import "./styles/AdminUsers.css";

function AdminUsers() {
  const [control, setControl] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserCardClick = (userId) => {
    setSelectedUserId(userId);
    setControl(2);
  };
  const handleCloseCardClick = () => {
    setControl(1);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <div className="admin-users">
      <Title boldText="Gérer vos" italicText="Utilisateurs" htmlTag="h1" />
      {control === 1 && (
        <>
          <UsersFilter
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            handleReset={handleReset}
          />
          <UserCardList
            onUserCardClick={handleUserCardClick}
            searchTerm={searchTerm}
          />
        </>
      )}
      {control === 2 && (
        <AdminUserFullDataProvider id={selectedUserId}>
          <UserInfosCard
            userId={selectedUserId}
            onClose={handleCloseCardClick}
          />
        </AdminUserFullDataProvider>
      )}
    </div>
  );
}

AdminUsers.propTypes = {};
export default AdminUsers;

/* 
Créer une state qui détient toutes les informations de user
usersfilter doit passer des informations à son parent sur qui rechercher
le parent utiliser ces informations pour mettre à jour le .map

*/
