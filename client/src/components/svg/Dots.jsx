import PropTypes from "prop-types";

function Dots({ className, height = 57, width = 61, fill = "#2BD886" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 61 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill={fill} />
      <circle cx="2.5" cy="28.5" r="2.5" fill={fill} />
      <circle cx="16.5" cy="41.5" r="2.5" fill={fill} />
      <circle cx="58.5" cy="41.5" r="2.5" fill={fill} />
      <circle cx="44.5" cy="41.5" r="2.5" fill={fill} />
      <circle cx="30.5" cy="41.5" r="2.5" fill={fill} />
      <circle cx="2.5" cy="41.5" r="2.5" fill={fill} />
      <circle cx="58.5" cy="54.5" r="2.5" fill={fill} />
      <circle cx="44.5" cy="54.5" r="2.5" fill={fill} />
      <circle cx="30.5" cy="54.5" r="2.5" fill={fill} />
      <circle cx="16.5" cy="54.5" r="2.5" fill={fill} />
      <circle cx="2.5" cy="54.5" r="2.5" fill={fill} />
      <circle cx="58.5" cy="28.5" r="2.5" fill={fill} />
      <circle cx="44.5" cy="28.5" r="2.5" fill={fill} />
      <circle cx="30.5" cy="28.5" r="2.5" fill={fill} />
      <circle cx="16.5" cy="28.5" r="2.5" fill={fill} />
      <circle cx="58.5" cy="15.5" r="2.5" fill={fill} />
      <circle cx="44.5" cy="15.5" r="2.5" fill={fill} />
      <circle cx="30.5" cy="15.5" r="2.5" fill={fill} />
      <circle cx="16.5" cy="15.5" r="2.5" fill={fill} />
      <circle cx="2.5" cy="15.5" r="2.5" fill={fill} />
      <circle cx="58.5" cy="2.5" r="2.5" fill={fill} />
      <circle cx="44.5" cy="2.5" r="2.5" fill={fill} />
      <circle cx="30.5" cy="2.5" r="2.5" fill={fill} />
      <circle cx="16.5" cy="2.5" r="2.5" fill={fill} />
    </svg>
  );
}

Dots.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};
export default Dots;
