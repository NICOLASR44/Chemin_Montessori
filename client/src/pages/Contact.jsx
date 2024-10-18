import ContactForm from "../components/contact-page/ContactForm";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/NavBar";
import Title from "../components/shared/Title";
import Arrow from "../components/svg/Arrow";
import SpringGreen from "../components/svg/SpringGreen";
import "./styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="contact">
        <div className="contact__title">
          <Title boldText="Vous avez une" italicText="question ?" />
        </div>
        <main className="contact__main">
          <img
            className="contact__main-img"
            src="/public/phoneKid.png"
            alt="enfant au téléphone"
          />
          <Arrow
            className="contact__main-arrow"
            fill="var(--clr-intense-green)"
          />
          <div className="contact__main-form">
            <ContactForm />
            <SpringGreen className="contact__main-springGreen" />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
