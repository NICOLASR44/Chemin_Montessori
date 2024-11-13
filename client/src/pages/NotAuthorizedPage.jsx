import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { gsap } from "gsap";
import AuthModalWrapper from "../components/shared/AuthModal/AuthModal1";
import "./NotAuthorizedPage.css";
import SpringGreen from "../components/svg/SpringGreen";

export default function NotAuthorizedPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => setIsModalOpen(false);

  const text = "Oups!";
  const letters = text.split("").map((char) => (
    <span key={uuidv4()} className="not-authorized__letter">
      {char}
    </span>
  ));

  useEffect(() => {
    gsap.to(".not-authorized__letter", {
      opacity: 0.3,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      stagger: 0.1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="not-authorized">
      <div className="not-authorized__content">
        <h1 className="not-authorized__title">{letters}</h1>
        <p className="not-authorized__text">
          Cette page est réservée aux admins 😎
        </p>
        <p className="not-authorized__text">
          Il semble que vous n'ayez pas les droits nécessaires pour accéder à
          cette page.
        </p>
        <p className="not-authorized__text">
          Connectez-vous avec un compte administrateur pour accéder aux secrets
          d'admin !
        </p>

        <div className="not-authorized__button-container">
          {!isModalOpen && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="not-authorized__button not-authorized__button--connect"
            >
              Se connecter
            </button>
          )}
          <Link
            to="/"
            className="not-authorized__button not-authorized__button--home"
          >
            Retour à l'accueil
          </Link>
        </div>
        <div className="not-authorized__springgreen">
          <SpringGreen />
        </div>
      </div>

      <div className="not-authorized__modal">
        {isModalOpen && (
          <AuthModalWrapper
            closeModal={closeModal}
            defaultTab="login"
            onLoginSuccess={() => window.location.reload()}
          />
        )}
      </div>
    </div>
  );
}
