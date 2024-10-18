// Hooks
import { useGSAP } from "@gsap/react";

// Context
import { UserContextProvider } from "../context/UserContext";

// Components
import Navbar from "../components/shared/NavBar";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Footer from "../components/shared/Footer";
import WelcomeUser from "../components/client-page/WelcomeUser";
import SuggestedWorkshops from "../components/client-page/SuggestedWorkshops";
import RoundSpirale from "../components/svg/RoundSpirale";
import Title from "../components/shared/Title";
import PurchasedWorkshops from "../components/client-page/PurchasedWorkshops";
import ManagedProfile from "../components/client-page/ManagedProfile";

// Custom Hooks
import useAnimation from "../hooks/useAnimation";

// CSS
import "./styles/Client.css";

function Client() {
  const { slideInTop } = useAnimation();

  useGSAP(() => {
    slideInTop(".client__user-profil");
  }, []);

  return (
    <UserContextProvider>
      <div className="NavBar">
        {" "}
        <Navbar />{" "}
      </div>
      <div className="client">
        <ScrollToTopButton />
        <main className="client__main">
          <section className="client__welcome-section">
            <WelcomeUser />
          </section>
          <section className="client__workshop-section">
            <div className="client__workshop-title">
              <Title boldText="Les ateliers" italicText="achetés" />
              <RoundSpirale className="client__workshop-svg" />
            </div>
            <PurchasedWorkshops />
          </section>
          <section className="client__workshop-section">
            <div className="client__purchased-title">
              <Title boldText="Ces ateliers" italicText="peuvent vous plaire" />
            </div>
            <SuggestedWorkshops
              className="client__workshop-list"
              boldText="Ces ateliers"
              italicText="peuvent vous plaire"
            />
          </section>
          <section className="client__user-profil">
            <ManagedProfile />
          </section>
        </main>
      </div>
      <Footer />
    </UserContextProvider>
  );
}

export default Client;
