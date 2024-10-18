import { useState } from "react";
import Button from "../shared/Button";
import Modal from "../shared/Modal"; // Import du composant modal
import "./styles/ContactForm.css";

function ContactForm() {
  // États pour les champs du formulaire et l'abonnement à la newsletter
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [borderClass, setBorderClass] = useState("");

  // Fonction pour vérifier la validité de l'e-mail
  const isValidEmail = (emailvalidation) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailvalidation);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification que tous les champs sont remplis
    if (!email) {
      setBorderClass("error-border");
      setModalMessage(
        <div className="error-border">
          <p>Oupsss!!!</p>
          <p>
            Merci d'inscrire votre adresse mail afin d'envoyer le formulaire.
          </p>
        </div>
      );
      setShowModal(true);
      return;
    }

    // Vérification que l'adresse e-mail est valide
    if (!isValidEmail(email)) {
      setBorderClass("error-border"); // choix de la bordure grace aux props
      setModalMessage(
        <div className="error-border">
          <p>Oupsss !!!</p>
          <p>Veuillez entrer une adresse e-mail valide.</p>
        </div>
      );
      setShowModal(true);
      return;
    }

    setBorderClass("good-border");
    setModalMessage(
      <div className="good-border">
        <p>Merci pour votre message !</p>
        <p>Nous vous répondrons très bientôt.</p>
      </div>
    );
    setShowModal(true);

    // Réinitialiser les champs du formulaire
    setName("");
    setEmail("");
    setMessage("");
    setNewsletter(false);
  };

  // Fonction pour réinitialiser le formulaire
  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setNewsletter(false);
  };

  return (
    <>
      <form className="contact-form">
        <div className="contact-form__field">
          <label htmlFor="name" className="contact-form__field-legend">
            Nom
          </label>
          <input
            type="text"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email" className="contact-form__field-legend">
            Mail
          </label>
          <input
            type="email"
            className={`input-field ${isValidEmail(email) ? "good-border" : "error-border"}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message" className="contact-form__field-legend3">
            Message
          </label>
          <textarea
            className="input-field"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="contact-form__newsletter">
          <input
            type="checkbox"
            id="newsletter"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <label htmlFor="newsletter">S'inscrire à la newsletter</label>
        </div>

        <div className="contact-form__send-buttons">
          <Button
            text="Réinitialiser"
            type="button"
            onClick={handleReset}
            style={{
              fontSize: "1rem",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--clr-gray)",
              padding: "0.5rem 1rem",
            }}
          />
          <Button
            text="Envoyer"
            type="submit"
            onClick={handleSubmit}
            style={{
              fontSize: "1rem",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--clr-pink)",
              padding: "0.5rem 1rem",
            }}
          />
        </div>
      </form>

      {/* Modal pour les messages */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
        borderClass={borderClass}
      />
    </>
  );
}

export default ContactForm;
