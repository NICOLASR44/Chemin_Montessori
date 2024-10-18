import Title from "../shared/Title";
import mother from "../../../public/motherAndKid.png";
import coach from "../../../public/coach.png";
import "./styles/AboutSection.css";

function AboutSection() {
  return (
    <section className="about__articles">
      <div className="about__artcile1">
        <div className="about__article1--text-container">
          <Title
            style={{ marginBottom: "2rem" }}
            italicText="Bienvenue"
            htmlTag="h2"
          />
          <p>
            Transformez l'apprentissage de vos enfants avec la magie de la
            méthode Montessori ! Découvrez comment je peux guider votre famille
            vers une éducation plus autonome, créative et épanouissante. Offrez
            à vos enfants les clés pour développer leur plein potentiel.
          </p>
        </div>
        <div className="about__article1--image-container">
          <div className="about__article1--image-background">
            <img
              className="about__article1--image"
              src={mother}
              alt="mother and kid"
            />
          </div>
        </div>
      </div>
      <div className="about__artcile2">
        <div className="about__article2--text-container">
          <Title
            style={{ marginBottom: "2rem", textAlign: "rigth" }}
            boldText="Qui"
            italicText="Suis-je ?"
            htmlTag="h2"
          />
          <p>
            Je suis Sophie Martin, coach certifiée en méthode Montessori avec
            plus de 10 ans d'expérience dans le domaine de l'éducation. Ma
            passion pour l'approche Montessori m'a poussée à consacrer ma
            carrière à accompagner les familles et les enseignants dans
            l'implémentation de cette pédagogie innovante. Grâce à mes
            formations spécialisées et à mon expertise, je m'engage à aider
            chaque enfant à s'épanouir dans un environnement stimulant, tout en
            respectant son rythme et ses besoins individuels. Avec moi, plongez
            dans un univers où l'apprentissage devient une aventure
            enthousiasmante et pleine de sens.
          </p>
        </div>
        <div className="about__article2--image-container">
          <div className="about__article2--image-background">
            <img
              className="about__article2--image"
              src={coach}
              alt="mother and kid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
