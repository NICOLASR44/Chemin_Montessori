// import PropTypes from "prop-types";
import childrenPlay from "../../public/brick-assembly.webp";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/NavBar";
import Title from "../components/shared/Title";
import "./styles/PageConstruction.css";

function PageConstruction() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="play-page">
        <div className="play-page__title-container">
          <Title
            style={{ marginTop: "5vh", marginBottom: "4rem" }}
            boldText="La page est en cours de construction,"
            italicText="revenez plus tard..."
            htmlTag="h2"
          />
        </div>

        <img
          className="play-page__image"
          src={childrenPlay}
          alt="Deux enfants qui jouent"
        />
      </div>
      <Footer />
    </>
  );
}
// PageConstruction.propTypes = {
//   boldText: PropTypes.string.isRequired,
//   italicText: PropTypes.string.isRequired,
// };
export default PageConstruction;
