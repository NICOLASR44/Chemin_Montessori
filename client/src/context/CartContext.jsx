import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un atelier au panier
  const addToCart = useCallback(async (userId, workshopId) => {
    try {
      const response = await axios.post(
        `http://localhost:3310/api/cart/user/${userId}/workshop/${workshopId}`
      );

      if (response.status === 200 || response.status === 201) {
        const newWorkshop = {
          id: workshopId,
          title: "Nom de l'atelier",
          price: 100,
        };
        setCartItems((prevItems) => [...prevItems, newWorkshop]);
      } else {
        console.error(
          "Erreur lors de l'ajout de l'atelier au panier.",
          response.status
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'atelier au panier :", error);
    }
  }, []);

  // Fonction pour retirer un atelier du panier
  const removeFromCart = useCallback(async (userId, workshopId) => {
    try {
      await axios.delete(
        `http://localhost:3310/api/cart/user/${userId}/workshop/${workshopId}`
      );
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== workshopId)
      );
    } catch (error) {
      console.error(
        "Erreur lors de la suppression de l'atelier du panier :",
        error
      );
    }
  }, []);

  // vérifier si un atelier est dans le panier via une requête GET
  const checkWorkshopInCart = useCallback(async (userId, workshopId) => {
    try {
      const response = await axios.get(
        `http://localhost:3310/api/cart/user/${userId}/workshop/${workshopId}`
      );
      return response.data.isInCart;
    } catch (error) {
      console.error("Erreur lors de la vérification du panier :", error);
      return false;
    }
  }, []);

  const value = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, checkWorkshopInCart }),
    [cartItems, addToCart, removeFromCart, checkWorkshopInCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
