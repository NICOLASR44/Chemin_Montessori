import PropTypes from "prop-types";

function StarEmpty({
  width = "105",
  height = "105",
  fill = "none",
  className,
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 105 105"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_136_506)">
        <path
          d="M51.504 28.1446C58.256 22.7036 61.632 19.9831 64.5585 21.1655C67.485 22.3479 68.0236 26.65 69.1008 35.2542L69.3796 37.4802C69.6859 39.9254 69.8388 41.1479 70.4403 42.1567C71.0415 43.1655 72.0227 43.8461 73.9855 45.2077L75.7726 46.4474C82.6794 51.2387 86.133 53.6345 85.8624 56.9078C85.5919 60.181 81.7764 62.1645 74.1453 66.1306L72.1712 67.1568C70.0027 68.2839 68.9183 68.8474 68.1566 69.7789C67.3952 70.7105 67.0423 71.9042 66.3364 74.292L65.694 76.4656C63.2107 84.8678 61.9692 89.069 58.8757 89.9097C55.7818 90.7503 52.885 87.6737 47.0913 81.521L45.5926 79.929C43.9463 78.1807 43.1233 77.3063 42.0511 76.8732C40.979 76.44 39.7796 76.4972 37.3808 76.6112L35.1968 76.7153C26.7551 77.1166 22.5342 77.3173 20.8928 74.5636C19.2514 71.8099 21.2766 67.9253 25.3269 60.1562L26.3747 58.1464C27.5258 55.9385 28.1013 54.8347 28.2004 53.6355C28.2996 52.4363 27.9111 51.2778 27.1342 48.9607L26.4269 46.8511C23.6928 38.6972 22.3259 34.6199 24.405 32.0774C26.4843 29.5348 30.6327 30.2105 38.9295 31.5618L41.076 31.9114C43.4337 32.2955 44.6126 32.4875 45.7458 32.1795C46.8791 31.8715 47.8385 31.0985 49.7572 29.5523L51.504 28.1446Z"
          stroke="#FFBAF3"
          strokeWidth="5"
        />
      </g>
      <defs>
        {/* <clipPath id="clip0_136_506">
            <rect width="80" height="80" fill="white" transform="translate(29.9688) rotate(22)"/>
            </clipPath> */}
      </defs>
    </svg>
  );
}

StarEmpty.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

StarEmpty.defaultProps = {
  width: "105",
  height: "105",
};
export default StarEmpty;
