// NotAuthorizedPage.jsx
import { useState } from "react";
import AuthModalWrapper from "../components/shared/AuthModal/AuthModal1"; // Assurez-vous du bon chemin de votre modal

export default function NotAuthorizedPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Oops! Cette page est réservée aux admins 😎</h1>
      <p>
        Il semble que vous n'ayez pas les droits nécessaires pour accéder à
        cette page.
      </p>
      <p>
        Connectez-vous avec un compte admin pour accéder aux secrets d'admin !
      </p>

      {isModalOpen && (
        <AuthModalWrapper
          closeModal={closeModal}
          defaultTab="login"
          onLoginSuccess={() => window.location.reload()} // Recharge la page après connexion
        />
      )}
      {!isModalOpen && (
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Se connecter
        </button>
      )}
    </div>
  );
}
