import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AdminRoute from "./hooks/AdminRoute";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Workshop from "./pages/Workshop";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import BlogArticle from "./pages/BlogArticle";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Client from "./pages/Client";

import AuthModalWrapper from "./components/shared/AuthModal/AuthModal1";
import PageConstruction from "./pages/PageConstruction";
import { AuthProvider } from "./context/AuthContext";
import { UserContextProvider } from "./context/UserContext";
import { CartContextProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ateliers",
    element: <Workshop />,
  },
  {
    path: "/produit/:id",
    element: <Product />,
  },
  {
    path: "/apropos",
    element: <About />,
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <Admin />
      </AdminRoute>
    ),
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  { path: "/blog-article/:id", element: <BlogArticle /> },
  {
    path: "/panier",
    element: <Cart />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  { path: "/panier", element: <Cart /> },
  {
    path: "/connexion",
    element: <AuthModalWrapper />,
  },
  {
    path: "/play",
    element: <PageConstruction />,
  },
  {
    path: "/profil",
    element: <Client />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
