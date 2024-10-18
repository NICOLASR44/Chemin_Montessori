import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import useHeroAnimations from "../../hooks/useHeroAnimation";
import Button from "../shared/Button";
import StarEmpty from "../svg/StarEmpty";
import Flower9 from "../svg/Flower9";
import Arrow from "../svg/Arrow";
import "./styles/Hero.css";

export default function Hero() {
  const container = useRef();
  const isAbove1024 = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isBelow1024 = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/ateliers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useHeroAnimations(container);

  return (
    <section ref={container} className="hero">
      <div className="hero__text-container">
        <div className="hero__text">L'éducation par l'exploration</div>
        <h1 className="hero__title">
          Encourager
          <span className="hero__title--color"> l'autonomie </span>
          et
          <br />
          <span className="hero__title--color"> la curiosité </span>
          des enfants au quotidien
        </h1>
        <div className="hero__text">Découvrir la méthode MONTESSORI</div>
        {isAbove1024 && (
          <Button
            text="Découvrez les ateliers"
            style={{
              backgroundColor: "var(--clr-lavender)",
              marginTop: "2rem",
              width: "250px",
              height: "50px",
            }}
            onClick={handleNavigation}
          />
        )}
        {isBelow1024 && (
          <Button
            text="Découvrez les ateliers"
            style={{
              backgroundColor: "var(--clr-lavender)",
              marginTop: "1rem",
              width: "175px",
              height: "40px",
              fontSize: "0.8rem",
            }}
            onClick={handleNavigation}
          />
        )}
        <Arrow className="hero__arrow-svg" fill="var(--clr-lavender)" />
      </div>
      <div className="hero__image-container">
        <div className="hero__image-background">
          <img
            className="hero__image"
            src="../../../public/fillettes-cubes.png"
            alt="fillettes jouant aux cubes"
          />
          <StarEmpty className="hero__star-SVG" />
          <Flower9 className="hero__flower9-svg" />
        </div>
      </div>
    </section>
  );
}
