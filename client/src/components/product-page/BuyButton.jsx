import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { VideoContext } from "../../context/VideoContext";
import { ProductContext } from "../../context/ProductContext";
import Button from "../shared/Button";
import { calculateCost } from "../../functions/calculateCost";
import "./styles/BuyButton.css";

function BuyButton({ onClickConnect, userId }) {
  const { videoData, videoIsLoading } = useContext(ProductContext);
  const { section } = useContext(VideoContext);
  const { addToCart, removeFromCart, isInCart, cartItems } = useCart();
  const [workshopInCart, setWorkshopInCart] = useState(false);

  const workshopId = videoIsLoading ? null : videoData[0]?.id;

  // Utiliser un effet pour vérifier si l'atelier est dans le panier
  useEffect(() => {
    if (workshopId) {
      const inCart = isInCart(workshopId);

      setWorkshopInCart(inCart);
    }
  }, [isInCart, workshopId, cartItems]);

  const handleClick = () => {
    if (onClickConnect) {
      onClickConnect();
    }
    if (!workshopInCart) {
      setWorkshopInCart(true);
      removeFromCart(workshopId);
    } else {
      setWorkshopInCart(false);
      addToCart(userId, workshopId);
    }
  };

  const lastEntry = async () => {
    const entries = await videoData[videoData.length - 1];
    return entries;
  };

  if (videoIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="buy-button">
      <div className="buy-button__title">
        <h1>{videoData[0].workshop_title}</h1>
      </div>
      <div className="buy-button__description">
        <p>{videoData[section].video_description}</p>
      </div>
      <div className="buy-button__content">
        <p>
          {lastEntry.video_section} {" parties + ressources"}
        </p>
      </div>
      <div className="buy-button__pricing">
        {calculateCost(videoData[0].price_ht, videoData[0].tva)}
      </div>

      <div className="buy-button__button">
        <Button
          text={workshopInCart ? "Retirer du panier" : "Ajouter au panier"}
          style={{
            fontSize: "1rem",
            fontFamily: "var(--font-header)",
            backgroundColor: "var(--clr-pink)",
            fontWeight: "100",
            padding: "0.5rem 3rem",
          }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

BuyButton.propTypes = {
  onClickConnect: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default BuyButton;
