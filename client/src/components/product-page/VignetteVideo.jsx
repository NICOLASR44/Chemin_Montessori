import PropTypes from "prop-types";
import "./styles/VignetteVideo.css";
import PlaySVG from "../svg/PlayButton";

function VignetteVideo({ imgSrc, partName, duration, onClick }) {
  return (
    <div
      role="button"
      onKeyDown={() => {}}
      tabIndex={0}
      className="vignette-video"
      onClick={onClick}
    >
      <div className="vignette__image-container">
        <img src={imgSrc} alt="vignette" className="vignette-video__vignette" />
        <div className="vignette__overlay" />
        <PlaySVG className="vignette__svg" />
      </div>
      <p className="vignette-video__p">Partie: {partName}</p>
      <span className="vignette-video__time">{duration} mins</span>
    </div>
  );
}

VignetteVideo.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  partName: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default VignetteVideo;
