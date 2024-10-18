import PropTypes from "prop-types";
// import './styles/CloseButton.css'

function CloseButton({ className, sizes = 50, onClick }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      width={sizes}
      height={sizes}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#9E9E9E" />
      <path
        d="M35.0254 37H31.9534C31.7187 37 31.532 36.9413 31.3934 36.824C31.2654 36.696 31.1587 36.5573 31.0734 36.408L24.9294 26.776C24.844 27.032 24.748 27.2507 24.6414 27.432L18.6574 36.408C18.5507 36.5573 18.4334 36.696 18.3054 36.824C18.188 36.9413 18.0227 37 17.8094 37H14.9294L22.8174 25.224L15.2494 14.072H18.3374C18.5614 14.072 18.7267 14.1093 18.8334 14.184C18.94 14.2587 19.036 14.3653 19.1214 14.504L25.1054 23.688C25.18 23.464 25.292 23.2187 25.4414 22.952L31.0894 14.568C31.1747 14.4187 31.276 14.3013 31.3934 14.216C31.5107 14.12 31.6494 14.072 31.8094 14.072H34.7694L27.1694 25.08L35.0254 37Z"
        fill="black"
      />
    </svg>
  );
}

CloseButton.propTypes = {
  className: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CloseButton;
