/* eslint-disable react/button-has-type */
import "./styles/Button.css";
import PropTypes from "prop-types";

/*
Comment fonctionne ce bouton ?
---
Vous devez y passer le texte qui sera affiché en props
Dans style, vous pouvez rajouter le style de votre bouton :
<Button
  text="En voir plus !"
  style={{ backgroundColor: "var(--clr-lavender)" }}
/>
*/

function Button({ text, style = {}, onClick, type = "button" }) {
  return (
    <button type={type} className="button" style={style} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
};

export default Button;
