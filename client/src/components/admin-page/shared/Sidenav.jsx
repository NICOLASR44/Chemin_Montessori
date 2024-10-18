import PropTypes from "prop-types";
import "./styles/SideNav.css";

function SideNav({ palet, setPalet }) {
  const links = [
    { id: 1, title: "Ateliers" },
    { id: 2, title: "Blog" },
    { id: 3, title: "Utilisateurs" },
    { id: 4, title: "Avis" },
    { id: 5, title: "Statistiques" },
  ];

  const handleClick = (id) => () => setPalet(id);

  return (
    <nav className="sidenav">
      <h2 className="sidenav__title">Palette Administrateur</h2>
      <div className="sidenav__flex-container">
        <img
          className="sidenav__img"
          src="/avatar-yellow.png"
          alt="avatar de l'utilisateur"
        />
        <span className="sidenav__text">Bonjour,</span>
        <span className="sidenav__text--accent">Sophie</span>
      </div>
      <ul className="sidenav__list">
        {links.map((link) => (
          <li
            className="sidenav__list-item"
            key={link.id}
            onClick={handleClick(link.id)}
            aria-hidden="true"
            style={{
              border: link.id === palet ? "1px solid black" : "none",
            }}
          >
            {link.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

SideNav.propTypes = {
  palet: PropTypes.number.isRequired,
  setPalet: PropTypes.func.isRequired,
};

export default SideNav;
