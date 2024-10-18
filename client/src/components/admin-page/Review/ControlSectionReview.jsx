import PropTypes from "prop-types";
import Title from "../../shared/Title";
import "./styles/ControlSectionReview.css";

function ControlSectionReview({ control, setControl }) {
  const buttons = [
    { id: 1, title: "Valider les avis" },
    { id: 2, title: "Voir les avis" },
    { id: 3, title: "Supprimer un avis" },
  ];

  const handleClick = (id) => () => setControl(id);

  return (
    <section className="control-section-review">
      <Title boldText="Gérer vos" italicText="Avis" htmlTag="h1" />
      <ul className="control-section-review__list">
        {buttons.map((button) => (
          <li className="control-section-review__list-item" key={button.id}>
            <button
              onClick={handleClick(button.id)}
              type="button"
              style={{
                border: button.id === control ? "1px solid black" : "none",
              }}
            >
              {button.title}
            </button>
          </li>
        ))}{" "}
      </ul>
    </section>
  );
}

ControlSectionReview.propTypes = {
  setControl: PropTypes.func.isRequired,
  control: PropTypes.number.isRequired,
};
export default ControlSectionReview;
