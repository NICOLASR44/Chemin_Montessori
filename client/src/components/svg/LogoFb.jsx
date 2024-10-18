import PropTypes from "prop-types";

function LogoFb({ width = "30", height = "30", className }) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 7.5C2.5 4.73857 4.73857 2.5 7.5 2.5H22.5C25.2614 2.5 27.5 4.73857 27.5 7.5V22.5C27.5 25.2614 25.2614 27.5 22.5 27.5H7.5C4.73857 27.5 2.5 25.2614 2.5 22.5V7.5ZM7.5 5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8808 6.11929 25 7.5 25H15V16.25H13.75C13.0596 16.25 12.5 15.6904 12.5 15C12.5 14.3096 13.0596 13.75 13.75 13.75H15V11.875C15 9.45875 16.9587 7.5 19.375 7.5H20.125C20.8154 7.5 21.375 8.05965 21.375 8.75C21.375 9.44035 20.8154 10 20.125 10H19.375C18.3395 10 17.5 10.8395 17.5 11.875V13.75H20.125C20.8154 13.75 21.375 14.3096 21.375 15C21.375 15.6904 20.8154 16.25 20.125 16.25H17.5V25H22.5C23.8808 25 25 23.8808 25 22.5V7.5C25 6.11929 23.8808 5 22.5 5H7.5Z"
          fill="#252525"
        />
      </svg>
    </div>
  );
}
LogoFb.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default LogoFb;
