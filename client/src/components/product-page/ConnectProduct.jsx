import { useState } from "react";
import AuthModalWrapper from "../shared/AuthModal/AuthModal1";
import Button from "../shared/Button";
import Arrow from "../svg/Arrow";
import Dots from "../svg/Dots";
import WhirlPink from "../svg/WhirlPink";
import BigSun from "../svg/BigSun";
import "./styles/ConnectProduct.css";

function ConnectProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Gère l'ouverture de la modal
  const [defaultTab, setDefaultTab] = useState("login"); // Gère l'onglet actif par défaut

  // Fonction pour ouvrir la modal sur l'onglet "Se connecter"
  const handleOpenLogin = () => {
    setDefaultTab("login");
    setIsModalOpen(true);
  };

  // Fonction pour ouvrir la modal sur l'onglet "S'enregistrer"
  const handleOpenRegister = () => {
    setDefaultTab("register");
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="connectProduct">
      <div className="connectProduct__img-container">
        <img
          className="connectProduct__img"
          src="../../../public/phoneKid.png"
          alt="enfant au téléphone"
        />
        <BigSun className="connectProduct__sun-svg" />
      </div>

      <div className="connectProduct__bloctext">
        <Dots className="connectProduct__dots-svg" />
        <WhirlPink className="connectProduct__whirl-svg" />
        <span className="connectProduct__bloctext-span">
          Vous êtes prêt à explorer le monde fascinant de la méthode Montessori
          et à découvrir des leçons qui peuvent transformer l'apprentissage de
          votre enfant ?
        </span>
        <div>
          <p className="connectProduct__bloctext-p">
            Il est temps de vous connecter pour accéder à toutes nos ressources
            pédagogiques !
            <br />
            En vous connectant, vous bénéficierez de :
          </p>
          <ul className="connectProduct__bloctext-ul">
            <li className="connectProduct__bloctext-li">
              Leçons enrichissantes adaptées à différents niveaux d’âge.
            </li>
            <li className="connectProduct__bloctext-li">
              Activités pratiques pour appliquer la méthode Montessori à la
              maison.
            </li>
            <li className="connectProduct__bloctext-li">
              Conseils personnalisés pour soutenir le développement de votre
              enfant.
            </li>
          </ul>
        </div>
        <div className="connect-product__buttons">
          <button
            onClick={handleOpenLogin}
            className="connectProduct__buttons-connect"
            type="button"
          >
            Se connecter
          </button>
          <Button
            className="connectProduct__buttons-register"
            text="S'enregistrer"
            onClick={handleOpenRegister}
            style={{
              backgroundColor: "var(--clr-intense-green)",
              width: "11.5rem",
              padding: "0.35em 1.25em",
              fontSize: "1rem",
            }}
          />
        </div>
        <Arrow
          className="connectProduct__arrow-svg"
          fill="var(--clr-intense-green)"
        />
      </div>

      {/* Modal d'authentification */}
      {isModalOpen && (
        <AuthModalWrapper closeModal={closeModal} defaultTab={defaultTab} />
      )}
    </div>
  );
}

export default ConnectProduct;
