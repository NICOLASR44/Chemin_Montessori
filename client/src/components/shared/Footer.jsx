import { Link } from "react-router-dom";
import LogoFb from "../svg/LogoFb";
import LogoIst from "../svg/LogoIst";
import LogoMontessori from "../svg/LogoMontessori";
import LogoYtb from "../svg/LogoYtb";
import "./styles/Footer.css";

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footerall">
      <footer className="footer">
        <div className="footer__logo">
          <LogoMontessori
            className="footer__logo-img"
            width="284"
            height="60"
          />
        </div>
        <div className="footer__container">
          <div className="footer__section footer__section--left">
            <div className="footer__link">
              <Link to="/apropos" className="footer__faq">
                F.A.Q
              </Link>
            </div>
          </div>
          <div className="footer__section footer__section-center">
            <div className="footer__copyright">
              <p>
                <strong>Chemin Montessori - 2024 ©</strong>
              </p>
            </div>
            <div className="footer__socials">
              <a
                href="https://facebook.com"
                className="footer__fb"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoFb className="LogoFb" width="30" height="30" />
              </a>
              <a
                href="https://instagram.com"
                className="footer__ist"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoIst className="LogoIst" width="35" height="35" />
              </a>
              <a
                href="https://youtube.com"
                className="footer__ytb"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoYtb className="LogoYtb" width="35" height="40" />
              </a>
            </div>
          </div>
          <div className="footer__section footer__section--right">
            <div className="footer__link">
              <Link
                to="/apropos"
                className="footer__about"
                onClick={handleClick}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="footer__contactus"
                onClick={handleClick}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
