import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function SpringGreen({ width, height, fill, className }) {
  useGSAP(() => {
    gsap.fromTo(
      ".spring-green",
      { scaleY: 0.5, delay: 0.5 },
      {
        scaleY: 1,
        duration: 2,
        ease: "elastic.out(1.5, 0.2)",
        delay: 0.5,
      }
    );
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 153"
      fill={fill}
      className={`spring-green ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.7111 1C12.0635 1 1 8.51798 1 17.7919C1 27.0658 12.0635 34.5838 25.7111 34.5838C33.3596 34.5838 39.56 31.4014 39.56 27.4756C39.56 23.5498 33.3596 20.3673 25.7111 20.3673C12.0635 20.3673 1 27.8853 1 37.1592C1 46.4332 12.0635 53.9514 25.7111 53.9514C33.3596 53.9514 39.56 50.7688 39.56 46.8429C39.56 42.9172 33.3596 39.7347 25.7111 39.7347C12.0635 39.7347 1 47.2989 1 56.6296C1 65.9603 12.0635 73.5247 25.7111 73.5247C33.3596 73.5247 39.56 70.3421 39.56 66.4162C39.56 62.4903 33.3596 59.3083 25.7111 59.3083C12.0635 59.3083 1 66.826 1 76.1C1 85.374 12.0635 92.8916 25.7111 92.8916C33.3596 92.8916 39.56 89.7097 39.56 85.7838C39.56 81.8579 33.3596 78.6753 25.7111 78.6753C12.0635 78.6753 1 86.1936 1 95.4675C1 104.741 12.0635 112.259 25.7111 112.259C33.3596 112.259 39.56 109.077 39.56 105.151C39.56 101.225 33.3596 98.0428 25.7111 98.0428C12.0635 98.0428 1 105.561 1 114.834C1 124.108 12.0635 131.627 25.7111 131.627C33.3596 131.627 39.56 128.444 39.56 124.518C39.56 120.593 33.3596 117.41 25.7111 117.41C12.0635 117.41 1 124.974 1 134.305C1 143.636 12.0635 151.2 25.7111 151.2"
        stroke="#2BD886"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

SpringGreen.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  className: PropTypes.string.isRequired,
};

SpringGreen.defaultProps = {
  width: "41",
  height: "153",
  fill: "none",
};

export default SpringGreen;
