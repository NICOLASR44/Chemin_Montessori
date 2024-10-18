import PropTypes from "prop-types";
import Title from "../../shared/Title";
import "./styles/ControlSectionWorkshop.css";

function ControlSectionWorkshop({ control, setControl }) {
  const buttons = [
    { id: 1, title: "Publier un atelier" },
    { id: 2, title: "Modifier un atelier" },
    { id: 3, title: "Supprimer un atelier" },
  ];

  const handleClick = (id) => () => setControl(id);

  return (
    <section className="control-section-workshop">
      <Title boldText="Gérer vos" italicText="Ateliers" htmlTag="h1" />
      <ul className="control-section-workshop__list">
        {buttons.map((button) => (
          <li className="control-section-workshop__list-item" key={button.id}>
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

ControlSectionWorkshop.propTypes = {
  setControl: PropTypes.func.isRequired,
  control: PropTypes.number.isRequired,
};
export default ControlSectionWorkshop;
