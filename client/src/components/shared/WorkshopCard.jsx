import "./styles/WorkshopCard.css";
import PropTypes from "prop-types";

function WorkshopCard({
  price = "Gratuit",
  title = "Atelier Éveil Montessori",
  imgSrc = "../../../public/Happychild.png",
  onClick,
}) {
  return (
    <div className="workshop-card" onClick={onClick} aria-hidden="true">
      <img className="workshop-card__img" src={imgSrc} alt={title} />
      <span className="workshop-card__label">{price}</span>
      <h3 className="workshop-card__title">{title}</h3>
    </div>
  );
}
WorkshopCard.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};
export default WorkshopCard;
