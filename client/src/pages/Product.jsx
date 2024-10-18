import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

// Context
import { ProductContextProvider } from "../context/ProductContext";
import { VideoContextProvider } from "../context/VideoContext";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

// Components
import HeaderProduct from "../components/product-page/HeaderProduct";
import ConnectProduct from "../components/product-page/ConnectProduct";
import DownloadResources from "../components/product-page/Download-resources";
import ProductReviews from "../components/product-page/ProductReviews";
import Navbar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import BuyButton from "../components/product-page/BuyButton";
import Comment from "../components/product-page/Comment";
import AuthModalWrapper from "../components/shared/AuthModal/AuthModal1";

// CSS ok
import "./styles/Product.css";

export default function Product() {
  const { id, id: workshopId } = useParams(); // L'ID du produit
  const authContext = useContext(AuthContext); // Vérification du contexte
  const { hasPurchasedWorkshop, purchasedWorkshopLoading } =
    useContext(UserContext); // Récupérer la méthode hasPurchasedWorkshop et l'état de chargementtilisation du contexte utilisateur
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  if (!authContext) {
    console.error("Le AuthContext n'est pas disponible");
    return <div>Le contexte utilisateur n'a pas été initialisé.</div>;
  }

  const { user } = authContext; // destructuration après vérification

  const isLoggedIn = !!user; // Si l'utilisateur est connecté ou non

  // Vérifie si l'utilisateur a acheté l'atelier
  const userHasPurchased = hasPurchasedWorkshop(id); // id correspond à l'atelier actuel

  // Si les données sont en cours de chargement
  if (purchasedWorkshopLoading) {
    return <p>Chargement des informations...</p>;
  }

  // Fonction pour ajouter l'atelier au panier
  const handleAddToCart = async () => {
    if (isLoggedIn) {
      await addToCart(user.id, workshopId); // Appel à la fonction du contexte pour ajouter l'atelier au panier
    } else {
      handleOpenLoginModal(); // Si non connecté, ouvre la modal
    }
  };

  return (
    <ProductContextProvider id={id}>
      <VideoContextProvider>
        <header className="NavBar" style={{ marginBottom: "10vh" }}>
          <Navbar />
        </header>
        <ScrollToTopButton />
        <main className="product">
          <HeaderProduct />

          <div className="product__comment-section">
            {/* Cas 1: Non connecté */}
            {!isLoggedIn && (
              <>
                <BuyButton onClickConnect={handleOpenLoginModal} />{" "}
                {/* Ouvre la modal */}
                <ProductReviews />
              </>
            )}

            {/* Cas 2: Connecté sans achat */}
            {isLoggedIn && !userHasPurchased && (
              <>
                <BuyButton onClickConnect={handleAddToCart} />{" "}
                {/* Ajoute l'atelier au panier */}
                <ProductReviews />
              </>
            )}

            {/* Cas 3: Connecté avec achat */}
            {isLoggedIn && userHasPurchased && (
              <>
                <Comment /> {/* Laisser un commentaire */}
                <ProductReviews />
              </>
            )}
          </div>

          {/* Affichage des ressources ou connexion selon l'état */}
          {isLoggedIn && hasPurchasedWorkshop ? (
            <DownloadResources /> // Accès aux ressources
          ) : (
            <ConnectProduct /> // Invitation à se connecter ou acheter
          )}
        </main>

        <div style={{ marginTop: "15vh" }}>
          <Footer />
        </div>
        {/* Modal de connexion */}
        {isLoginModalOpen && (
          <AuthModalWrapper
            closeModal={handleCloseLoginModal}
            defaultTab="login"
            onLoginSuccess={handleCloseLoginModal}
          />
        )}
      </VideoContextProvider>
    </ProductContextProvider>
  );
}
