import PropTypes from "prop-types";
import "./styles/WorshopCardCart.css";
import DeleteButton from "../svg/DeleteButton";

function WorshopCardCart({
  workshopTitle = "Atelier Initiation Montessori",
  workshopPrice = "49,50",
  onDelete,
}) {
  // A completer lors de la liaison avec BDD

  return (
    <div className="worshop-card-cart">
      <h3 className="worshop-card-cart__title worshop-card-cart__content">
        {workshopTitle}
      </h3>
      <p className="worshop-card-cart__price worshop-card-cart__content">
        {workshopPrice}
      </p>
      <DeleteButton
        height={17}
        width={15}
        className="worshop-card-cart__delete"
        onClick={onDelete}
      />
    </div>
  );
}

WorshopCardCart.propTypes = {
  workshopTitle: PropTypes.string.isRequired,
  workshopPrice: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default WorshopCardCart;
