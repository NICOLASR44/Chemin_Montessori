// import {  useEffect } from "react";
import PropTypes from "prop-types";
import AuthForm from "./AuthForm";
import "../styles/Authmodal/SignupForm.css";
import Button from "../Button";
// import postFetcher from "../../../functions/postFetcher";

function SignupForm({ formData, setFormData, errors, handleSubmitSignup }) {
  // const [usernameAvailable, setUsernameAvailable] = useState(null); // État pour la disponibilité du nom d'utilisateur

  // Vérification du nom d'utilisateur en live
  // useEffect(() => {
  //   const checkAvailability = async () => {
  //     if (formData.username) {
  //       try {
  //         const result = await postFetcher(
  //           `${import.meta.env.VITE_API_URL}/api/user`,
  //           { username: formData.username }
  //         );
  //         // setUsernameAvailable(result.isAvailable); // Mise à jour de l'état selon la réponse de l'API
  //       } catch (error) {
  //         console.error(
  //           "Erreur lors de la vérification du nom d'utilisateur :",
  //           error
  //         );
  //         // setUsernameAvailable(false); // En cas d'erreur, on considère que le nom est pris
  //       }
  //     }
  //   };

  //   checkAvailability();
  // }, [formData.username]); // Déclenche la vérification lorsque le nom d'utilisateur change

  return (
    <form onSubmit={handleSubmitSignup} className="signupform">
      {/* Champ pour le prénom avec gestion d'erreur */}
      <AuthForm
        label="Prénom :"
        type="text"
        placeholder="Entrez votre prénom"
        value={formData.firstname} // Valeur actuelle du prénom
        onChange={(e) =>
          setFormData({ ...formData, firstname: e.target.value })
        } // Met à jour le prénom dans formData
        error={errors.firstname} // Affiche l'erreur pour le prénom si présente
      />

      {/* Champ pour le nom avec gestion d'erreur */}
      <AuthForm
        label="Nom :"
        type="text"
        placeholder="Entrez votre nom"
        value={formData.lastname} // Valeur actuelle du nom
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} // Met à jour le nom dans formData
        error={errors.lastname} // Affiche l'erreur pour le nom si présente
      />

      {/* Champ pour le nom d'utilisateur avec gestion d'erreur */}
      <AuthForm
        label="Nom d'utilisateur :"
        type="text"
        placeholder="Choisissez un nom d'utilisateur"
        value={formData.username} // Valeur actuelle du nom d'utilisateur
        onChange={(e) => setFormData({ ...formData, username: e.target.value })} // Met à jour le nom d'utilisateur dans formData
        error={errors.username} // Affiche l'erreur pour le nom d'utilisateur si présente
      />

      {/* Message indiquant la disponibilité du nom d'utilisateur */}
      {/* {usernameAvailable === false && (
        <p
          style={{
            color: "red",
            marginLeft: "16rem",
            marginTop: "-0.6rem",
            marginBottom: "0.4rem",
            textAlign: "center",
          }}
        >
          Le nom d'utilisateur est déjà pris.
        </p>
      )}
      {usernameAvailable === true && (
        <p
          style={{
            color: "forestgreen",
            marginLeft: "16rem",
            marginTop: "-0.6rem",
            marginBottom: "0.4rem",
            textAlign: "center",
          }}
        >
          Le nom d'utilisateur est disponible
        </p>
      )} */}

      {/* Champ pour l'adresse e-mail avec gestion d'erreur */}
      <AuthForm
        label="Adresse e-mail :"
        type="email"
        placeholder="Entrez votre adresse e-mail"
        value={formData.email} // Valeur actuelle de l'e-mail
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Met à jour l'e-mail dans formData
        error={errors.email} // Affiche l'erreur pour l'e-mail si présente
      />

      {/* Champ pour le mot de passe avec gestion d'erreur */}
      <AuthForm
        label="Mot de passe :"
        type="password"
        placeholder="Entrez votre mot de passe"
        title="Le mot de passe doit contenir au moins 8 caractères, une majuscule, minuscule, un chiffre et un caractère spécial"
        value={formData.password} // Valeur actuelle du mot de passe
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} // Met à jour le mot de passe dans formData
        error={errors.password} // Affiche l'erreur pour le mot de passe si présente
      />

      {/* Champ pour la confirmation du mot de passe avec gestion d'erreur */}
      <AuthForm
        label="Confirmer le mot de passe :"
        type="password"
        placeholder="Confirmez votre mot de passe"
        value={formData.confirmPassword} // Valeur actuelle de la confirmation du mot de passe
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        } // Met à jour la confirmation du mot de passe dans formData
        error={errors.confirmPassword} // Affiche l'erreur pour la confirmation du mot de passe si présente
      />

      {/* Checkbox pour s'abonner à la newsletter */}
      <div className="signupform__newsletter">
        <label>
          <div className="signupform__newsletter-title">
            S'abonner à la newsletter
            <input
              className="signupform__newsletter-checkbox"
              type="checkbox"
              checked={formData.newsletter} // État de la case à cocher pour la newsletter
              onChange={(e) =>
                setFormData({ ...formData, newsletter: e.target.checked })
              } // Met à jour l'état du checkbox dans formData
            />
          </div>
        </label>
      </div>

      {/* Bouton de soumission du formulaire */}
      <div className="signupform__submit">
        <Button
          text="S'enregistrer"
          type="submit"
          style={{
            fontSize: "1rem",
            fontFamily: "var(--font-body)",
            backgroundColor: "var(--clr-intense-green)",
            padding: "0.5rem 1rem",
          }}
        />
      </div>
    </form>
  );
}

// Validation des props avec PropTypes pour garantir que les bonnes données sont passées au composant
SignupForm.propTypes = {
  formData: PropTypes.shape({
    firstname: PropTypes.string.isRequired, // Le prénom est requis
    lastname: PropTypes.string.isRequired, // Le nom est requis
    username: PropTypes.string.isRequired, // Le nom d'utilisateur est requis
    email: PropTypes.string.isRequired, // L'adresse e-mail est requise
    password: PropTypes.string.isRequired, // Le mot de passe est requis
    confirmPassword: PropTypes.string.isRequired, // La confirmation du mot de passe est requise
    newsletter: PropTypes.bool.isRequired, // Le statut d'abonnement à la newsletter est requis
  }).isRequired,
  setFormData: PropTypes.func.isRequired, // Fonction pour mettre à jour formData est requise
  errors: PropTypes.shape({
    firstname: PropTypes.string, // Erreur potentielle pour le prénom
    lastname: PropTypes.string, // Erreur potentielle pour le nom
    username: PropTypes.string, // Erreur potentielle pour le nom d'utilisateur
    email: PropTypes.string, // Erreur potentielle pour l'adresse e-mail
    password: PropTypes.string, // Erreur potentielle pour le mot de passe
    confirmPassword: PropTypes.string, // Erreur potentielle pour la confirmation du mot de passe
  }),
  handleSubmitSignup: PropTypes.func.isRequired, // Fonction de soumission du formulaire est requise
};

// Valeurs par défaut pour les erreurs, au cas où elles ne seraient pas fournies
SignupForm.defaultProps = {
  errors: {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

export default SignupForm;
