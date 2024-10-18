import { useGSAP } from "@gsap/react";
import WhirlYellow from "../svg/WhirlYellow";
import "./styles/CardInfo.css";

// Custom Hooks
import useAnimation from "../../hooks/useAnimation";

function CardInfo() {
  const { slideInRight } = useAnimation();

  useGSAP(() => {
    slideInRight(".CardInfo");
  }, []);

  return (
    <div className="CardInfo">
      <h2 className="CardInfo__title-1">
        C'est quoi <br />
        <span className="CardInfo__title-2">Montessori ?</span>
      </h2>
      <WhirlYellow width={89} height={89} className="CardInfo__svg" />
      <p className="CardInfo__texte">
        La méthode Montessori se base avant toute chose sur l’observation de
        l’enfant par l’adulte. Ce dernier doit se positionner en tant que
        spectateur, pour pouvoir analyser le comportement du tout-petit, ses
        réactions et ses réponses, selon les situations. Ce n’est qu’après qu’il
        pourra proposer un environnement adapté à l’apprentissage autonome, et
        accompagner l’enfant dans ses découvertes.
      </p>
    </div>
  );
}

export default CardInfo;
