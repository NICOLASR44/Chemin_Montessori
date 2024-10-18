import PropTypes from "prop-types";
import DownloadButton from "../svg/product-page/Download-button";
import "./styles/DownloadCardList.css";

function DownloadCard({
  title,
  subtitle,
  fill,
  downloadLink,
  titleStyle,
  subtitleStyle,
}) {
  const [firstLine] = subtitle.split("gratuitement");

  return (
    <div className="download__card">
      <a href={downloadLink} download aria-label={`Télécharger ${title}`}>
        <DownloadButton width={125} height={125} fill={fill} />
      </a>
      <h3 style={titleStyle}>{title}</h3>
      <p style={subtitleStyle}>
        {firstLine}
        <br />
        gratuitemment
      </p>
    </div>
  );
}

DownloadCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  fill: PropTypes.string,
  downloadLink: PropTypes.string.isRequired,
  titleStyle: PropTypes.shape({
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    marginTop: PropTypes.string,
  }),
  subtitleStyle: PropTypes.shape({
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    marginTop: PropTypes.string,
    color: PropTypes.string,
  }),
};

DownloadCard.defaultProps = {
  subtitle: "Le PDF pour cette leçon est disponible gratuitement",
  fill: "none",
  titleStyle: {},
  subtitleStyle: {},
};

export default DownloadCard;
