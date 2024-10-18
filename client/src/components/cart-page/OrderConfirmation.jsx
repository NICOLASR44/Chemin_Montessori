import PropTypes from "prop-types";
import "./styles/OrderConfirmation.css";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import BigSun from "../svg/BigSun";

function OrderConfirmation({ orderNumber }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/profil");
    window.scrollTo(0, 0);
  };

  return (
    <div className="order-confirmation">
      <div className="order-confirmation__modal-content">
        <p className="order-confirmation__order-info">
          Commande n°{orderNumber} - paiement accepté
        </p>
        <div className="order-confirmation__modal-text-container">
          <p className="order-confirmation__modal-text">
            Retrouvez toutes vos commandes
          </p>
          <p className="order-confirmation__modal-text">
            dans votre espace client :
          </p>
        </div>
        <Button
          text="Voir mes ateliers"
          onClick={handleNavigation}
          style={{
            backgroundColor: "var(--clr-lavender)",
            marginTop: "0 auto",
            display: "block",
            padding: "0.75rem 2rem",
            fontWeight: 500,
            alignSelf: "center",
          }}
        />
        <BigSun className="order-confirmation__bigsun" />
      </div>
    </div>
  );
}

OrderConfirmation.propTypes = {
  orderNumber: PropTypes.string.isRequired,
};

export default OrderConfirmation;
