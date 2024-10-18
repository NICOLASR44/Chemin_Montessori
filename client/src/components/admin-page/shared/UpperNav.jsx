// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import LogoMontessori from "../../svg/LogoMontessori";
import "./styles/UpperNav.css";

function UpperNav() {
  const handleLogout = () => {
    console.info("jai cliqué pour me déconnecter");
  };

  const links = [
    { id: 1, title: "Contacter le support", to: "/contact" },
    { id: 2, title: "Se déconnecter", action: handleLogout },
    { id: 3, title: "Retourner sur le site", to: "/" },
  ];

  return (
    <nav className="uppernav">
      <LogoMontessori />
      <ul className="uppernav__list">
        {links.map((link) => (
          <li className="uppernav__list-item" key={link.id}>
            {link.to ? (
              <Link to={link.to}>{link.title}</Link>
            ) : (
              <p aria-hidden onClick={link.action}>
                {link.title}
              </p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// UpperNav.propTypes = {};
export default UpperNav;
