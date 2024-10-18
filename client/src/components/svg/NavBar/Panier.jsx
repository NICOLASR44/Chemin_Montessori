import PropTypes from "prop-types";

function Panier({
  width = "32",
  height = "32",
  stroke = "#252525",
  className,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_121_324)">
        <path
          d="M1.33301 1.33337H6.66634L10.2397 19.1867C10.3616 19.8006 10.6956 20.352 11.1831 20.7444C11.6706 21.1369 12.2806 21.3454 12.9063 21.3334H25.8663C26.4921 21.3454 27.1021 21.1369 27.5896 20.7444C28.0771 20.352 28.4111 19.8006 28.533 19.1867L30.6663 8.00004H7.99967M13.333 28C13.333 28.7364 12.7361 29.3334 11.9997 29.3334C11.2633 29.3334 10.6663 28.7364 10.6663 28C10.6663 27.2637 11.2633 26.6667 11.9997 26.6667C12.7361 26.6667 13.333 27.2637 13.333 28ZM27.9997 28C27.9997 28.7364 27.4027 29.3334 26.6663 29.3334C25.93 29.3334 25.333 28.7364 25.333 28C25.333 27.2637 25.93 26.6667 26.6663 26.6667C27.4027 26.6667 27.9997 27.2637 27.9997 28Z"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_121_324">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

Panier.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.string,
  className: PropTypes.string.isRequired,
};

Panier.defaultProps = {
  width: "32",
  height: "32",
  stroke: "#252525",
};

export default Panier;
