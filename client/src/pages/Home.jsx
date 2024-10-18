// Context
import { BlogContextProvider } from "../context/BlogContext";
import { WorkshopContextProvider } from "../context/WorkshopContext";

// CSS
import "./styles/Home.css";

// Components
import CardInfo from "../components/landing-page/CardInfo";
import Hero from "../components/landing-page/Hero";
import ReviewSection from "../components/landing-page/ReviewSection";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/NavBar";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import TagMan from "../components/shared/TagMan";
import WorkshopSection from "../components/shared/WorkshopSection";
import BlogSection from "../components/landing-page/BlogSection";

// Assets
import greenLine from "../../public/green-line.png";

function Home() {
  return (
    <WorkshopContextProvider>
      <div className="NavBar">
        {" "}
        <Navbar />{" "}
      </div>
      <main className="Home">
        <ScrollToTopButton />
        <div className="Home__hero-container">
          <Hero />
          <img
            src={greenLine}
            alt="élément décoratif, ligne verte"
            className="Home__green-line"
          />
        </div>
        <section
          className="Home__description"
          style={{
            width: "90%",
            maxWidth: "1440px",
            margin: "0 auto",
            marginTop: "15vh",
          }}
        >
          <TagMan tag1="#Développer" tag2="#Jouer" tag3="#Observer" />
          <CardInfo />
        </section>
        <WorkshopSection
          boldText="Devenez experts avec nos"
          italicText="Atelier"
          ShowSplash="true"
          showButton="true"
        />

        <ReviewSection />
        <BlogContextProvider>
          <BlogSection />
        </BlogContextProvider>
      </main>
      <Footer />
    </WorkshopContextProvider>
  );
}

export default Home;
