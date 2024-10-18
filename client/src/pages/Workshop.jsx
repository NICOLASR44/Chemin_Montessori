// Context
import { WorkshopContextProvider } from "../context/WorkshopContext";

// Components
import Footer from "../components/shared/Footer";
import RendezVous from "../components/workshop-page/RendezVous";
import Navbar from "../components/shared/NavBar";
import WorkshopSection from "../components/shared/WorkshopSection";
import StarEmpty from "../components/svg/StarEmpty";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Flower9 from "../components/svg/Flower9";

// CSS
import "./styles/Workshop.css";
import PaidWorkshopSection from "../components/workshop-page/PaidWorkshopSection";

function Workshop() {
  return (
    <WorkshopContextProvider>
      <main className="workshop-page">
        <img
          src="/public/green-line.png"
          alt="élément décoratif, ligne verte"
          className="workshop__green-line"
        />
        <div className="NavBar">
          {" "}
          <Navbar />{" "}
        </div>
        <ScrollToTopButton />
        <div className="workshop">
          <div className="workshop__discover">
            <StarEmpty className="workshop__discover-svg-star" />
            <WorkshopSection
              boldText="Découvrez nos"
              italicText="Ateliers"
              showButton={false}
            />
            <Flower9 className="workshop__discover-svg-flower" />
          </div>
          <PaidWorkshopSection />
          <RendezVous />
          <Footer />
        </div>
      </main>
    </WorkshopContextProvider>
  );
}

export default Workshop;
