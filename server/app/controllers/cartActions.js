// Import access to database tables
const tables = require("../../database/tables");

const addToCart = async (req, res, next) => {
    try {
      const { userId, workshopId } = req.params;
      const result = await tables.cart.addToCart(userId, workshopId);
  
      if (result.affectedRows > 0) {
        res.status(201).json({ message: "Atelier ajouté au panier avec succès" });
      } else {
        res.status(500).json({ message: "Erreur lors de l'ajout de l'atelier au panier" });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
  


const readCart = async (req, res, next) => {
    try {
      // Fetch a specific item from the database based on the provided ID
      const { id } = req.params;
      const cart = await tables.cart.readCart(id);

      if (cart == null) {
        res.sendStatus(404);
      } else {
        res.json(cart);
      }
    } catch (err) {
        console.error(err);
      next(err);
    }
  };

  const deleteWorkshopCart = async (req, res, next) => {
    try {
      const { userId, workshopId } = req.params;
      const cart = await tables.cart.deleteWorkshopCart(userId, workshopId);

      if (cart == null) {
        res.sendStatus(404);
      } else {
        res.json(cart);
      }
    } catch (err) {
        console.error(err);
      next(err);
    }
  };

  const deleteCart = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await tables.deleteCart(userId);
  
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "Panier vidé avec succès" });
      } else {
        res.status(404).json({ message: "Panier non trouvé ou déjà vide" });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  

module.exports = {
  addToCart,
  readCart,
  deleteWorkshopCart,
  deleteCart
};
