import { useContext } from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import "./styles/UserCardList.css";
import { AdminUserContext } from "../../../context/AdminUserContext";

function UserCardList({ onUserCardClick, searchTerm }) {
  const { userData, userIsLoading } = useContext(AdminUserContext);

  if (userIsLoading) return "loading";

  // Case-insensitive filtering based on username or any other field like email
  const filteredUsers = userData.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-cardlist">
      <ul className="user-cardlist__list">
        {filteredUsers.map((user) => (
          <li
            className="user-cardlist__list-item"
            key={user.id}
            onClick={() => onUserCardClick(user.id)}
            aria-hidden="true"
          >
            <UserCard
              userName={user.username}
              imgSrc={`http://localhost:3310/${user.avatar}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

UserCardList.propTypes = {
  onUserCardClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
export default UserCardList;
