import PropTypes from "prop-types";
import Title from "../../shared/Title";
import "./styles/ControlSectionBlog.css";

function ControlSectionBlog({ control, setControl }) {
  const buttons = [
    { id: 1, title: "Publier un article" },
    { id: 2, title: "Modifier un article" },
    { id: 3, title: "Supprimer un article" },
  ];

  const handleClick = (id) => () => setControl(id);

  return (
    <section className="control-section-blog">
      <Title boldText="Gérer vos" italicText="Articles" htmlTag="h1" />
      <ul className="control-section-blog__list">
        {buttons.map((button) => (
          <li className="control-section-blog__list-item" key={button.id}>
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

ControlSectionBlog.propTypes = {
  setControl: PropTypes.func.isRequired,
  control: PropTypes.number.isRequired,
};
export default ControlSectionBlog;
