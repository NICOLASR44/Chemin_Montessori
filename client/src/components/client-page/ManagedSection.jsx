// import PropTypes from 'prop-types'
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./styles/ManagedSection.css";
import UserComments from "./UserComments";
import RecentOrders from "./RecentOrders";

function ManagedSection() {
  const { purchasedWorkshopData } = useContext(UserContext);

  const [activeSection, setActiveSection] = useState(null);

  function toggleSection(index) {
    setActiveSection(activeSection === index ? -1 : index);
  }

  function handleKeyPress(event, index) {
    if (event.key === "Enter" || event.key === " ") {
      toggleSection(index);
    }
  }

  return (
    <div className="managed-sections">
      <div
        className={`managed-section__item ${
          activeSection === 0 ? "active" : ""
        }`}
      >
        <div
          className="managed-section__header"
          onClick={() => toggleSection(0)}
          onKeyDown={(event) => handleKeyPress(event, 0)}
          role="button"
          tabIndex={0}
        >
          <span className="managed-section__question">
            Consulter mes dernières commandes
          </span>
          <span className="managed-section__icon">
            {activeSection === 0 ? "−" : "+"}
          </span>
        </div>
        {activeSection === 0 && (
          <div className="managed-section__answer">
            <RecentOrders />
          </div>
        )}
      </div>

      <div
        className={`managed-section__item ${
          activeSection === 1 ? "active" : ""
        }`}
      >
        <div
          className="managed-section__header"
          onClick={() => toggleSection(1)}
          onKeyDown={(event) => handleKeyPress(event, 1)}
          role="button"
          tabIndex={0}
        >
          <span className="managed-section__question">
            Consulter mes commentaires
          </span>
          <span className="managed-section__icon">
            {activeSection === 1 ? "−" : "+"}
          </span>
        </div>
        {activeSection === 1 && (
          <div className="managed-section__answer">
            <UserComments purchasedWorkshopData={purchasedWorkshopData} />
          </div>
        )}
      </div>
    </div>
  );
}

ManagedSection.propTypes = {};
export default ManagedSection;
