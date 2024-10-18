// import { useMediaQuery } from "react-responsive";
import Faq from "../shared/Faq";
import Title from "../shared/Title";
import "./styles/Faq-Container.css";

function FaqContainer() {
  return (
    <div className="faq__container">
      <div className="faq__container-title">
        <Title
          style={{
            marginTop: "5vh",
            marginBottom: "4rem",
          }}
          boldText="Les questions les plus"
          italicText="fréquemment posées !"
          htmlTag="h2"
        />
      </div>
      <div className="faq_container-faqCard">
        <Faq />
      </div>
    </div>
  );
}

export default FaqContainer;
