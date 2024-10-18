import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./styles/Cart.css";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Title from "../components/shared/Title";
import WorshopCardCart from "../components/cart-page/WorshopCardCart";
import SumCart from "../components/cart-page/SumCart";
import SplashTwo from "../components/svg/SplashTwo";
import Button from "../components/shared/Button";
import OrderConfirmation from "../components/cart-page/OrderConfirmation";
import { UserContext, UserContextProvider } from "../context/UserContext";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const { userId } = useContext(UserContext);
  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3310/api/cart/user/${userId}`
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération du panier:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalTTC =
    cartItems.length > 0
      ? parseFloat(cartItems[0].total_all_ttc).toFixed(2)
      : "0.00";
  const totalHT =
    cartItems.length > 0
      ? parseFloat(cartItems[0].total_all_ht).toFixed(2)
      : "0.00";

  const handleDelete = async (workshopId) => {
    try {
      await axios.delete(
        `http://localhost:3310/api/cart/user/${userId}/workshop/${workshopId}`
      );
      fetchCart();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article:", error);
    }
  };

  const handleCheckout = (newOrderNumber) => {
    setOrderNumber(newOrderNumber);
    setShowOrderConfirmation(true);
  };

  return (
    <UserContextProvider>
      <main className="cart__page">
        <div className="NavBar">
          <Navbar />
        </div>
        <ScrollToTopButton />
        <img
          src="/public/green-line.png"
          alt="élément décoratif, ligne verte"
          className="cart__green-line"
        />
        <div className="cart">
          {!showOrderConfirmation ? (
            <Title boldText="Mon" italicText="panier" />
          ) : (
            <Title
              style={{ marginTop: "5vh", marginBottom: "4rem" }}
              boldText="Merci pour"
              italicText="votre achat"
              htmlTag="h2"
            />
          )}
          <div className="cart__content">
            {!showOrderConfirmation ? (
              <section className="cart__content-summary">
                {cartItems.length === 0 ? (
                  <div className="cart__content-summary-empty">
                    <p className="cart__content-summary-empty-p">
                      Votre panier est vide
                    </p>
                    <Link to="/ateliers">
                      <Button
                        text="Voir les ateliers"
                        style={{
                          backgroundColor: "var(--clr-intense-green)",
                          fontSize: "1rem",
                          fontWeight: 500,
                        }}
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="cart__content-summary-cards">
                      {cartItems.map((workshop) => (
                        <WorshopCardCart
                          key={workshop.id}
                          workshopTitle={workshop.title}
                          workshopPrice={workshop.price_ht}
                          onDelete={() => handleDelete(workshop.id)}
                        />
                      ))}
                    </div>
                    <SumCart
                      totalTtc={totalTTC}
                      totalHt={totalHT}
                      onCheckout={handleCheckout}
                      userId={userId}
                    />
                  </>
                )}
              </section>
            ) : (
              <OrderConfirmation orderNumber={orderNumber} />
            )}
            <img
              className="cart__content-img"
              src="/public/butterfly-girls.png"
              alt="filles papillon"
            />
            <SplashTwo className="cart__content-splash" />
          </div>
        </div>
        <Footer />
      </main>
    </UserContextProvider>
  );
}

export default Cart;
