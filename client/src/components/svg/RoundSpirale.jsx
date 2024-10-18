import PropTypes from "prop-types";

function RoundSpirale({
  className,
  width = "77",
  height = "77",
  fill = "none",
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 77 77"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2399 8.85335C15.3766 9.09001 24.7832 2.80335 25.0166 3.21001C25.6332 4.28001 2.57991 26.4133 2.97324 27.0967C3.77991 28.4967 44.1266 1.09335 45.0999 2.77668C46.1599 4.61335 1.54991 37.8467 2.15658 38.8967C3.00324 40.36 55.7266 5.05335 56.9866 7.24001C57.9232 8.86001 0.67991 47.5233 2.12658 50.03C2.89324 51.3567 65.8466 11.0133 66.8132 12.6833C68.0999 14.91 5.52324 57.32 6.42991 58.8933C7.15324 60.1467 71.4499 19.6867 72.1732 20.9367C73.7299 23.63 11.4366 64.18 12.7499 66.4534C14.0632 68.7267 73.8532 28.85 74.8599 30.5933C76.1466 32.82 21.9399 70.1867 22.8499 71.7633C23.4732 72.8433 72.9532 40.0133 74.1766 42.13C75.2132 43.9267 37.3566 72.5167 38.2899 74.1367C38.8766 75.1534 70.0166 53.85 70.8699 55.3267"
        stroke="#FEEF79"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
RoundSpirale.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

RoundSpirale.defaultProps = {
  width: "77",
  height: "77",
  fill: "none",
};

export default RoundSpirale;
