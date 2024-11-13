import PropTypes from "prop-types";
import { useState, useCallback, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import validateForm from "../../../lib/validateForm";
import validateFormLogin from "../../../lib/validateFormLogin";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import postFetcher from "../../../functions/postFetcher";
import ModalHeader from "./ModalHeader";
import "../styles/Authmodal/AuthModal1.css";

function AuthModalWrapper({ closeModal, defaultTab, onLoginSuccess }) {
  // État pour savoir si on est sur l'onglet de connexion ou d'inscription
  const [isLogin, setIsLogin] = useState(defaultTab === "login");
  const { login } = useContext(AuthContext);
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    newsletter: false,
  });

  // État pour stocker les données du formulaire
  const [formDataLogin, setFormDataLogin] = useState({
    username: "",
    password: "",
  });

  // État pour stocker les messages d'erreur de validation
  const [errors, setErrors] = useState({});

  // Fonction pour changer d'onglet (connexion/inscription) et réinitialiser les données du formulaire
  const toggleTab = useCallback(() => {
    setIsLogin((prev) => !prev); // Inverse la valeur actuelle de isLogin
    // Réinitialise les données du formulaire et les erreurs
    setFormData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      newsletter: false,
    });
    setErrors({});
  }, []);

  // Gestionnaire de soumission du formulaire d'inscription
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    console.info("Inscription réussi");
    const newErrors = validateForm(formData, false); // 'false' indique que c'est pour l'inscription
    setErrors(newErrors);

    // Vérifier la correspondance des mots de passe si les deux champs sont remplis
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Les mots de passe ne correspondent pas.",
      }));
      return;
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        // Appel à l'API d'inscription avec postFetcher
        const result = await postFetcher(
          `${import.meta.env.VITE_API_URL}/api/user`,
          formData
        );
        console.info("Inscription réussie :", result);
        closeModal(); // Fermer la modal si l'inscription réussit
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error.message);
        setErrors({ api: error.message });
      }
    }
  };

  // Gestionnaire de soumission du formulaire de connexion
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.info("Formulaire de connexion soumis avec les données ");

    const newErrors = validateFormLogin(formDataLogin, true); // 'true' indique que c'est pour la connexion
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Appel à l'API de connexion avec postFetcher

        const result = await postFetcher(
          `${import.meta.env.VITE_API_URL}/api/user/login`,
          {
            username: formDataLogin.username,
            password: formDataLogin.password,
          }
        );
        // Vérifier si la réponse du serveur indique une erreur de correspondance
        if (result.error) {
          setErrors({
            api: "Une erreur s'est produite. Veuillez réessayer plus tard.",
          });
        } else {
          console.info("Connexion réussie :", result);
          login(result.token);

          // Met à jour l'état pour signaler la connexion réussie (via le callback)
          onLoginSuccess();
          closeModal(); // Fermer la modal si la connexion réussit
        }
      } catch (error) {
        console.error("Erreur lors de la connexion :", error.message);
        setErrors({
          api: "Nom d'utilisateur ou mot de passe incorrect.",
        });
      }
    }
  };

  // Gestion du clic sur l'onglet de connexion
  const handleLoginClick = useCallback(() => {
    setIsLogin(true); // Passe à l'onglet de connexion
  }, []);

  // Gestion du clic sur l'onglet d'inscription (basé sur toggleTab)
  const handleRegisterClick = useCallback(() => {
    toggleTab(); // Passe à l'onglet d'inscription
  }, [toggleTab]);

  // Permet de changer d'onglet à l'aide de la touche "Enter" ou "Espace" pour l'onglet de connexion
  const handleLoginKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsLogin(true); // Active l'onglet de connexion
    }
  }, []);

  // Même chose pour l'onglet d'inscription
  const handleRegisterKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        toggleTab(); // Active l'onglet d'inscription
      }
    },
    [toggleTab]
  );

  // Met à jour l'état isLogin si la valeur de defaultTab change
  useEffect(() => {
    setIsLogin(defaultTab === "login");
  }, [defaultTab]);

  return (
    <div className="authmodal">
      <div className="authmodal__content">
        {/* Affiche l'en-tête de la modal */}
        <ModalHeader closeModal={closeModal} />

        {/* Onglets de connexion et d'inscription */}
        <div className="authmodal__tabs">
          <span
            role="button"
            tabIndex="0"
            className={`authmodal__tab ${isLogin ? "authmodal__tab--active" : ""}`}
            onClick={handleLoginClick}
            onKeyDown={handleLoginKeyDown}
          >
            Se connecter
          </span>
          <span
            role="button"
            tabIndex="0"
            className={`authmodal__tab ${!isLogin ? "authmodal__tab--active" : ""}`}
            onClick={handleRegisterClick}
            onKeyDown={handleRegisterKeyDown}
          >
            S'enregistrer
          </span>
        </div>

        {/* Affiche le formulaire approprié en fonction de l'onglet actif */}
        {isLogin ? (
          <LoginForm
            formData={formDataLogin}
            setFormData={setFormDataLogin}
            errors={errors}
            handleSubmitLogin={handleSubmitLogin} // Utilise la fonction spécifique au login
          />
        ) : (
          <SignupForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            handleSubmitSignup={handleSubmitSignup} // Utilise la fonction spécifique à l'inscription
          />
        )}
      </div>
    </div>
  );
}

AuthModalWrapper.propTypes = {
  closeModal: PropTypes.func.isRequired, // Fonction pour fermer la modal
  defaultTab: PropTypes.oneOf(["login", "register"]).isRequired, // Définit si l'onglet initial est connexion ou inscription
  onLoginSuccess: PropTypes.func.isRequired,
};

export default AuthModalWrapper;
