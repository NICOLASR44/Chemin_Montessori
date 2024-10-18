import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./styles/UserComment.css";

function UserComments() {
  const [activeComment, setActiveComment] = useState(-1);

  const contextComments = useContext(UserContext);
  if (!contextComments) {
    return <div>Erreur: le contexte utilisateur n'est pas disponible</div>;
  }

  const { commentUserData, commentUserLoading, commentUserfoError } =
    contextComments;
  if (commentUserLoading) return <div>Chargement en cours...</div>;
  if (commentUserfoError)
    return <div>Erreur lors du chargement des données...</div>;

  function toggleComment(index) {
    setActiveComment(activeComment === index ? -1 : index);
  }

  function handleKeyPress(event, index) {
    if (event.key === "Enter" || event.key === " ") {
      toggleComment(index);
    }
  }

  return (
    <div className="comments">
      <ul className="comments__list">
        {commentUserData.map((comment) => (
          <li
            key={comment.id}
            className={`comments__item ${
              activeComment === comment.id ? "active" : ""
            }`}
          >
            <div
              className="comments__header"
              onClick={() => toggleComment(comment.id)}
              onKeyDown={(event) => handleKeyPress(event, comment.id)}
              tabIndex={0}
              role="button"
            >
              <span
                style={{ fontWeight: "bold" }}
                className="comments__workshop-title"
              >
                Atelier: {comment.workshop_title}
              </span>
              <br />
              <span className="comments__comment">{comment.comment}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserComments;
