import AboutSection from "../components/about-page/AboutSection";
import FaqContainer from "../components/about-page/Faq-Container";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/NavBar";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import "./styles/About.css";

function About() {
  return (
    <>
      <div className="NavBar">
        {" "}
        <Navbar />{" "}
      </div>
      <ScrollToTopButton />
      <div className="about">
        <main className="about__main">
          <AboutSection />
          <FaqContainer />
        </main>
      </div>
      <div style={{ marginTop: "15vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default About;
