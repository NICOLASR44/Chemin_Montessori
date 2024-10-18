import PropTypes from "prop-types";

function Crayon({ className, height = 25, width = 25 }) {
  return (
    <div>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_136_731)">
          <path
            d="M1.84758 19.9095L0.080346 23.6463C0.080346 23.6463 -0.19734 24.243 0.27976 24.7203C0.75686 25.1974 1.35378 24.9196 1.35378 24.9196L5.0904 23.1523L1.84758 19.9095Z"
            fill="black"
          />
          <path
            d="M17.1852 2.81734L4.80566 15.1968L9.80373 20.1949L22.1832 7.81541L17.1852 2.81734Z"
            fill="black"
          />
          <path
            d="M20.0019 9.86857e-05L18.3379 1.66406L23.336 6.66213L24.9999 4.99817L20.0019 9.86857e-05Z"
            fill="black"
          />
          <path
            d="M3.65256 16.3494L2.12305 17.8789L7.12112 22.877L8.65064 21.3475L3.65256 16.3494Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_136_731">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default Crayon;

Crayon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
