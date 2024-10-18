import PropTypes from "prop-types";
import "./styles/UserCard.css";

function UserCard({ imgSrc, userName }) {
  return (
    <div className="user-card">
      <img className="user-card__img" src={imgSrc} alt={userName} />
      <h3 className="user-card__title">{userName}</h3>
    </div>
  );
}

UserCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
export default UserCard;
