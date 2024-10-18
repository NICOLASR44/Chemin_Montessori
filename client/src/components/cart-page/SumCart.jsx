import axios from "axios";
import PropTypes from "prop-types";
import Button from "../shared/Button";
import "./styles/SumCart.css";

function SumCart({ totalHt, totalTtc, onCheckout, userId }) {
  const tva = (totalTtc - totalHt).toFixed(2);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3310/api/order/user/${userId}/validate`,
        {}
      );

      onCheckout(response.data.orderNumber);
    } catch (error) {
      console.error("Erreur lors de la validation du panier :", error);
    }
  };

  return (
    <div className="sum-cart">
      <div className="sum-cart-prices">
        <div className="sum-cart-totals">
          <p className="sum-cart-total">Total H.T.:</p>
          <p className="sum-cart-tva">TVA 20%</p>
          <p className="sum-cart-total">Total TTC:</p>
        </div>
        <div className="sum-cart-totals sum-cart-totals-sums">
          <p className="sum-cart-total">{totalHt}€</p>
          <p className="sum-cart-tva">{tva}€</p>
          <p className="sum-cart-total">{totalTtc}€</p>
        </div>
      </div>
      <Button
        text="Valider et payer"
        style={{
          backgroundColor: "var(--clr-intense-green)",
          margin: "0 auto",
          display: "block",
          alignSelf: "center",
          fontWeight: 500,
        }}
        onClick={handleSubmit}
      />
    </div>
  );
}

SumCart.propTypes = {
  totalHt: PropTypes.number.isRequired,
  totalTtc: PropTypes.number.isRequired,
  onCheckout: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
export default SumCart;
