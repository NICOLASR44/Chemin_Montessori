import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext"; // Import UserContext
import Avatar from "../svg/NavBar/Avatar";
import LogoCheminMontessori from "../svg/NavBar/LogoCheminMontessori";
import Panier from "../svg/NavBar/Panier";
import MenuBurger from "../svg/NavBar/MenuBurger";
import NavLinks from "./NavLinks";
import "./styles/NavBar.css";
import StarEmpty from "../svg/StarEmpty";
import AuthModalWrapper from "./AuthModal/AuthModal1";
import Blueavatar from "../../../public/avatar-blue.png";

export default function Navbar() {
  const [displayBurger, setDisplayBurger] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 801px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  // Récupérer les données utilisateur à partir de UserContext
  const { UserIdData } = useContext(UserContext);

  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  // Fonction pour gérer le clic sur le bouton de connexion/déconnexion
  const handleConnectionClick = () => {
    if (user) {
      handleLogout();
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBurger = () => setDisplayBurger(!displayBurger);

  return (
    <div className="navbar">
      {isDesktop && (
        <div className="navbar__desktop">
          <Link to="/">
            <LogoCheminMontessori className="navbar__logo" />
          </Link>
          <NavLinks />
          <div className="navbar__logo-cart">
            {/* Bouton Admin visible uniquement pour les administrateurs */}
            {user && user.isAdmin && (
              <Link to="/admin" className="navbar__admin-button">
                Admin
              </Link>
            )}

            {/* Bouton de connexion ou déconnexion */}
            <button
              className="navbar__connect-button"
              onClick={handleConnectionClick}
              type="button"
            >
              {user ? "Déconnexion" : "Se connecter"}
            </button>

            {/* Lien vers le panier */}
            <Link to="/panier" className="navbar__cart-button">
              <Panier width={40} height={40} />
            </Link>

            {/* Avatar de l'utilisateur */}
            <Link
              to={user ? "/profil" : "#"}
              onClick={() => {
                if (!user) {
                  setIsModalOpen(true);
                }
              }}
            >
              {user && UserIdData ? (
                <img
                  className="navbar__avatar avatar-shape"
                  src={
                    UserIdData.avatar
                      ? `http://localhost:3310/${UserIdData.avatar}`
                      : Blueavatar
                  }
                  alt="avatar"
                  width={40}
                  height={40}
                />
              ) : (
                <Avatar width={40} height={40} className="avatar-shape" />
              )}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile version */}
      {isMobile && (
        <div className="navbar__mobile">
          <Link to="/">
            <LogoCheminMontessori className="navbar__logo" />
          </Link>
          <div className="navbar__mobile-icons">
            <Link to="/panier" className="navbar__mobile__cart">
              <Panier width={27} height={27} />
            </Link>
            <button
              type="button"
              onClick={handleBurger}
              aria-label="Open the menu"
              aria-expanded={displayBurger}
              className="navbar__mobile-burger"
              style={{ background: "transparent", border: "none" }}
            >
              <MenuBurger width={30} height={30} />
            </button>
          </div>
          <div
            className={`navbar__mobile-menu ${
              displayBurger ? "open" : "closed"
            }`}
          >
            <NavLinks />

            {/* Bouton Admin pour les mobiles, visible uniquement pour les administrateurs */}
            {user && user.isAdmin && (
              <Link to="/admin" className="navbar__admin-button">
                Admin
              </Link>
            )}

            {/* Bouton de connexion/déconnexion */}
            <button
              className={`navbar__connect-button ${user ? "logout" : "login"}`}
              onClick={handleConnectionClick}
              type="button"
              style={{
                marginBottom: "2rem",
                fontSize: "1.1rem",
              }}
            >
              {user ? "Déconnexion" : "Se connecter"}
            </button>

            {/* Avatar de l'utilisateur */}
            <div className="navbar__mobile-star">
              <StarEmpty
                width={50}
                height={50}
                className="navbar_mobile-star-empty1"
              />
              <Link
                to={user ? "/profil" : "#"}
                onClick={() => {
                  if (!user) {
                    setIsModalOpen(true);
                  }
                }}
              >
                {user && UserIdData ? (
                  <img
                    className="navbar__avatar avatar-shape"
                    src={
                      UserIdData.avatar
                        ? `http://localhost:3310/${UserIdData.avatar}`
                        : Blueavatar
                    }
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar width={40} height={40} className="avatar-shape" />
                )}
              </Link>
              <StarEmpty
                width={50}
                height={50}
                className="navbar_mobile-star-empty3"
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal de connexion */}
      {isModalOpen && (
        <AuthModalWrapper
          closeModal={closeModal}
          defaultTab="login"
          onLoginSuccess={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
