import PropTypes from "prop-types";
import "./styles/DeleteButton.css";

function DeleteButton({ height = 17, width = 15, onClick, className = "" }) {
  return (
    <svg
      className={`${className} delete-button`}
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="8.5" r="7.5" fill="#E03D3D" />
      <path
        d="M12.352 14H10.476C10.3453 14 10.2403 13.9673 10.161 13.902C10.0863 13.8367 10.0257 13.762 9.979 13.678L7.634 9.793C7.59667 9.90967 7.55233 10.01 7.501 10.094L5.254 13.678C5.198 13.7573 5.13267 13.832 5.058 13.902C4.988 13.9673 4.89467 14 4.778 14H3.021L6.381 8.792L3.154 3.878H5.03C5.16067 3.878 5.254 3.89667 5.31 3.934C5.37067 3.96667 5.42667 4.02267 5.478 4.102L7.781 7.812C7.82767 7.69533 7.88367 7.57867 7.949 7.462L10.063 4.137C10.1143 4.04833 10.1703 3.983 10.231 3.941C10.2917 3.899 10.3687 3.878 10.462 3.878H12.261L9.006 8.715L12.352 14Z"
        fill="black"
      />
    </svg>
  );
}

DeleteButton.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default DeleteButton;
