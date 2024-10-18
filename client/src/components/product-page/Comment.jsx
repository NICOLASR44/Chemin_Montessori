import "./styles/Comment.css";
import { useState } from "react";

import Button from "../shared/Button";

function Comment() {
  const [text, setText] = useState("");
  // Nombre max de caractères à adapter :
  const maxLength = 200;

  // fonction qui va permettre de définir les conséquences du Submit/publier :
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      alert("Merci pour votre commentaire !");
      setText("");
    }
  };

  // fonction reset du texte
  const handleClear = () => {
    console.info("all clear");
    setText("");
  };

  return (
    <div className="comment">
      <form onSubmit={handleSubmit} className="comment__form">
        <label className="comment__form-label">
          <h2 className="comment__form-title">Laisser un commentaire : </h2>
          <textarea
            className="comment__form-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={maxLength}
            placeholder={`Maximum ${maxLength} caractères.`}
          />
          <div className="comment__count">
            {maxLength - text.length} caractères restants
          </div>
        </label>
        <div className="comment__form-interactions">
          <button
            type="button"
            className="comment__form-reset"
            onClick={handleClear}
          >
            Effacer le contenu
          </button>
          <Button
            className="comment__form-submit"
            type="submit"
            text="Publier"
            onClick={handleSubmit}
            style={{
              backgroundColor:
                text.trim() === "" ? "" : "var(--clr-intense-green)",
              color: text.trim() === "" ? "grey" : "black",
              fontSize: "1rem",
              padding: "0.3em 1.5em",
              cursor: text.trim() === "" ? "not-allowed" : "pointer",
              transition:
                "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Comment;

Comment.propTypes = {};
