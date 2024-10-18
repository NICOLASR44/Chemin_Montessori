import PropTypes from "prop-types";

export default function PlaySVG({ sizes = "30", className }) {
  return (
    <svg
      width={sizes}
      height={sizes}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Play</title>
      <path
        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
        fill="#FFF"
      />
    </svg>
  );
}

PlaySVG.propTypes = {
  sizes: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
