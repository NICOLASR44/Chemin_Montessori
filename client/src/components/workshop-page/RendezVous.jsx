import { Link } from "react-router-dom";
import "./styles/RendezVous.css";
import TagMan from "../shared/TagMan";
import Title from "../shared/Title";
import Button from "../shared/Button";
import WhirlYellow from "../svg/WhirlYellow";

function RendezVous() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="rendez-vous">
      <div className="rendez-vous__bloctext">
        <div className="rendez-vous__bloctext-titlecontainer">
          <Title
            className="rendez-vous__bloctext-title"
            boldText="Prendre"
            italicText="rendez-vous"
          />
          <WhirlYellow className="rendez-vous__bloctext-svg" />
        </div>
        <p className="rendez-vous__bloctext-p">
          Vous souhaitez en savoir plus sur la méthode Montessori et découvrir
          comment elle peut transformer l'apprentissage de votre enfant ? Je
          vous offre l'opportunité de discuter gratuitement avec moi.
          <br />
          Pour réserver votre appel téléphonique gratuit :
        </p>
        <Link
          to="/contact"
          className="rendez-vous__bloctext-button"
          onClick={handleClick}
        >
          <Button
            text="Prendre contact"
            style={{ backgroundColor: "var(--clr-yellow)" }}
          />
        </Link>
      </div>
      <TagMan tag1="#Education" tag2="#Comprendre" tag3="#Observer" />
    </div>
  );
}

export default RendezVous;
