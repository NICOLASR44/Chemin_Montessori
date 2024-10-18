import { Link } from "react-router-dom";
import "./styles/NavLinks.css";

export default function NavLinks() {
  return (
    <ul className="navbar__listing-pages">
      <li>
        <Link to="/" className="navbar__home-button">
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/apropos" className="navbar__about-button">
          À propos
        </Link>
      </li>
      <li>
        <Link to="/ateliers" className="navbar__workshop-button">
          Ateliers
        </Link>
      </li>
      <li>
        <Link to="/blog" className="navbar__blog-button">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contact" className="navbar__contact-button">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/play" className="navbar__play-button">
          Jouer !
        </Link>
      </li>
    </ul>
  );
}
