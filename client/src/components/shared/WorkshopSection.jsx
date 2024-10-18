// Hooks
import { useRef, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

// Utils
import PropTypes from "prop-types";
import { calculateCost } from "../../functions/calculateCost";

// Custom Hooks
import useAnimation from "../../hooks/useAnimation";

// Components
import WorkshopCard from "./WorkshopCard";
import Title from "./Title";
import "./styles/WorkshopSection.css";
import Button from "./Button";
import Splash from "../svg/Splash";
import { WorkshopContext } from "../../context/WorkshopContext";

/**
 * Composant `WorkshopSection` avec plusieurs titre, scroll et bouton effaçables.
 *
 * @param {string} props.boldTitle - 1ère partie du titre, si n'est pas présent, efface le titre
 * @param {string} props.italicTitle - 2ème partie du titre, si n'est pas présent, efface le titre
 * @param {string} props.showSplash - affichage du svg splash (par defaut non)
 * @param {string} props.showButton - affichage du boutton "en savoir plus" (par defaut non)
 * @param {string} props.enableScroll - permet le scroll horizontal (par defaut oui)
 *
 * @returns {JSX.Element} - Le composant `WorkshopSection` rendu avec ou sans titre/scroll/buton.
 */

/*
Les props de WorkshopSection :
Il y a 4 props à passer : le titre de la section (avec boldTitle et italicTitle), le svg Splash du titre,
l'affichage conditionnel du bouton "en savoir plus" et du scroll horizontal
*/

function WorkshopSection({
  boldText,
  italicText,
  showSplash = false,
  showButton = false,
  enableScroll = true,
}) {
  const { freeVideoData, freeVideoIsLoading } = useContext(WorkshopContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/ateliers");
    window.scrollTo(0, 0);
  };

  const { slideInTop } = useAnimation();

  useGSAP(() => {
    slideInTop(".landing-workshop-section");
  }, []);

  /* Ce useEffect est ici pour créer une média query en fonction de la taille de l'écran
  Si la taille descend sous les 940px, le second use effect pour être déclenché.
  940px correspond au breakpoint pour que la div passe en overflow.
  A modifier en fonction du contexte donc.
  */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 940px)");

    const handleScreenChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    setIsSmallScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  /* Ce second useEffect dispose qu'une condition, il est joué à chaque fois que la state
    isSmallScreen change (donc lorsque l'user modifie la taille de son écran.)
    Si l'écran matche la taille, alors l'utilisateur peut scroll horizontalement dans la div.
  */
  useEffect(() => {
    if (isSmallScreen && enableScroll) {
      const handleWheel = (e) => {
        if (scrollContainerRef.current) {
          e.preventDefault();
          scrollContainerRef.current.scrollLeft += e.deltaY;
        }
      };

      const currentRef = scrollContainerRef.current;
      if (isSmallScreen && enableScroll && currentRef) {
        currentRef.addEventListener("wheel", handleWheel, { passive: false });
      } else if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }

      return () => {
        if (currentRef) {
          currentRef.removeEventListener("wheel", handleWheel);
        }
      };
    }
    return () => {};
  }, [isSmallScreen, enableScroll]);

  const handleCardClick = (id) => {
    window.scrollTo({ top: 0 });
    navigate(`/produit/${id}`);
  };

  if (freeVideoIsLoading) return "loading";

  return (
    <section className="landing-workshop-section">
      {(boldText || italicText) && (
        <div className="landing-workshop-section__title-container">
          <Title
            style={{ marginTop: "5vh", marginBottom: "4rem" }}
            boldText={boldText}
            italicText={italicText}
            htmlTag="h2"
          />
          {showSplash && (
            <Splash className="landing-workshop-section__splash-svg" />
          )}
        </div>
      )}
      <ul ref={scrollContainerRef} className="landing-workshop-section__list">
        {freeVideoData.map((workshop) => (
          <li key={workshop.id}>
            <WorkshopCard
              imgSrc={`http://localhost:3310/${workshop.image}`}
              price={calculateCost(workshop.price_ht, workshop.tva)}
              title={workshop.title}
              onClick={() => handleCardClick(workshop.id)}
            />
          </li>
        ))}
      </ul>
      {showButton && (
        <Button
          text="En savoir plus !"
          style={{
            backgroundColor: "var(--clr-yellow)",
            alignSelf: "center",
            marginTop: "3rem",
          }}
          onClick={handleNavigation}
        />
      )}
    </section>
  );
}

WorkshopSection.propTypes = {
  boldText: PropTypes.string.isRequired,
  italicText: PropTypes.string.isRequired,
  showSplash: PropTypes.bool.isRequired,
  showButton: PropTypes.bool.isRequired,
  enableScroll: PropTypes.bool.isRequired,
};

export default WorkshopSection;
