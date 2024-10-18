import PropTypes from "prop-types";

function DownloadButton({ width = 125, height = 125, fill = "#CCBDF4" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66.2876 116.475C93.7684 116.475 116.046 94.1976 116.046 66.7168C116.046 39.2361 93.7684 16.9585 66.2876 16.9585C38.8069 16.9585 16.5293 39.2361 16.5293 66.7168C16.5293 94.1976 38.8069 116.475 66.2876 116.475Z"
        fill={fill}
      />

      <path
        d="M58.7124 108.042C86.1932 108.042 108.471 85.764 108.471 58.2832C108.471 30.8025 86.1932 8.5249 58.7124 8.5249C31.2317 8.5249 8.9541 30.8025 8.9541 58.2832C8.9541 85.764 31.2317 108.042 58.7124 108.042Z"
        stroke="#252634"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

DownloadButton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
};

DownloadButton.defaultProps = {
  width: "125",
  height: "125",
  fill: "#CCBDF4",
};

export default DownloadButton;
