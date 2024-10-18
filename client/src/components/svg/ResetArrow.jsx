import PropTypes from "prop-types";

function ResetArrow({
  className,
  onClick,
  width = 30,
  height = 30,
  fill = "#FEEF79",
}) {
  return (
    <div>
      <svg
        className={className}
        onClick={onClick}
        width={width}
        height={height}
        viewBox="0 0 31 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.60629 9.6066L6.96331 11.9636C2.41543 16.5115 2.41426 23.9137 6.96331 28.4628C11.5124 33.0118 18.9146 33.0107 23.4625 28.4628C28.0104 23.9149 28.0115 16.5127 23.4625 11.9636C21.2858 9.78691 18.3701 8.60368 15.3519 8.56715L18.1592 11.3744L15.8021 13.7314L9.32034 7.24958L15.8022 0.767767L18.1592 3.12479L16.0485 5.2355C19.6924 5.43821 23.1784 6.96556 25.8195 9.6066C31.6673 15.4544 31.6684 24.9708 25.8195 30.8198C19.9705 36.6688 10.4541 36.6676 4.60629 30.8198C-1.24148 24.972 -1.24267 15.4556 4.60629 9.6066Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

ResetArrow.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ResetArrow;
