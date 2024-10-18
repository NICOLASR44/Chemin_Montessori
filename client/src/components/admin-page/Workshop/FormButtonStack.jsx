import PropTypes from "prop-types";
// import "./styles/FormButtonStack.css";
import Button from "../../shared/Button";

function FormButtonStack({ addSection, handleSubmit }) {
  return (
    <>
      <Button
        text="Ajouter une section"
        style={{ backgroundColor: "var(--clr-lavender", marginRight: "1rem" }}
        onClick={addSection}
      />
      <Button
        text="Publier"
        style={{ backgroundColor: "var(--clr-intense-green" }}
        onClick={handleSubmit}
      />
    </>
  );
}

FormButtonStack.propTypes = {
  addSection: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormButtonStack;
