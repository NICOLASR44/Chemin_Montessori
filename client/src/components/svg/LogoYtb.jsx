import PropTypes from "prop-types";

function LogoYtb({ width = "35", height = "40", className }) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 35 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4352 31.2045C28.6614 31.3388 31.374 28.464 31.5 24.7773V15.2318C31.374 11.5452 28.6614 8.67034 25.4352 8.80456H9.5648C6.33868 8.67034 3.62597 11.5452 3.5 15.2318V24.7773C3.62597 28.464 6.33868 31.3388 9.5648 31.2045H25.4352Z"
          stroke="#252525"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8114 15.4846L21.2368 18.9213C21.5235 19.1127 21.6998 19.4636 21.6998 19.8429C21.6998 20.2225 21.5235 20.5733 21.2368 20.7645L16.8114 24.5245C15.9714 25.1757 14.7002 24.6205 14.7002 23.6029V16.403C14.7002 15.3902 15.9728 14.8334 16.8114 15.4846Z"
          stroke="#252525"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
LogoYtb.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default LogoYtb;
