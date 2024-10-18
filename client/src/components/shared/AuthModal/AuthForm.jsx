import PropTypes from "prop-types";
import "../styles/Authmodal/AuthForm.css";

function AuthForm({ label, type, placeholder, value, onChange, error, title }) {
  return (
    <>
      {/* Conteneur du champ de formulaire avec label */}
      <div className="authmodal__form-group">
        {/* Label pour le champ de formulaire */}
        <label className="authmodal__form-label">{label}</label>

        {/* Input avec gestion de l'état d'erreur */}
        <input
          type={type} // Type de l'input (texte, mot de passe, email, etc.)
          placeholder={placeholder} // Placeholder qui apparaît dans l'input vide
          title={title} // Optionnel, affiché au survol si fourni
          className={`authmodal__form-input ${error ? "authmodal-form__input--error" : ""}`} // Classe d'erreur si un message d'erreur est présent
          value={value} // Valeur actuelle de l'input contrôlée
          onChange={onChange} // Fonction déclenchée à chaque changement de valeur dans l'input
        />
      </div>

      {/* Message d'erreur s'il y en a un */}

      <div className="authmodal__form-error">
        {error && <span className="authmodal__form-error-msg">{error}</span>}{" "}
        {/* Affichage conditionnel du message d'erreur */}
      </div>
    </>
  );
}

// Définition des types des props avec PropTypes pour garantir l'intégrité des données passées au composant
AuthForm.propTypes = {
  label: PropTypes.string.isRequired, // Le label du champ est requis et doit être une chaîne de caractères
  type: PropTypes.string.isRequired, // Le type d'input (ex: "text", "password", etc.) est requis
  placeholder: PropTypes.string.isRequired, // Le placeholder est requis et doit être une chaîne
  value: PropTypes.string.isRequired, // La valeur actuelle de l'input est requise et doit être une chaîne
  onChange: PropTypes.func.isRequired, // La fonction onChange pour gérer les modifications de l'input est requise
  error: PropTypes.string.isRequired, // Le message d'erreur est requis et doit être une chaîne
  title: PropTypes.string, // Le title est optionnel, et s'il est fourni, il doit être une chaîne
};

// Définition des valeurs par défaut pour les props optionnelles
AuthForm.defaultProps = {
  title: "", // Si aucun title n'est passé, il sera défini comme une chaîne vide
};

export default AuthForm;
