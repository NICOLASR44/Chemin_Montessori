const express = require('express');

const orderRouter = express.Router();

// Import de la fonction pour valider le panier et créer la commande
const { validateCartAndCreateOrder } = require('../../../controllers/orderActions');

// Route pour valider le panier et créer une commande
orderRouter.post('/user/:userId/validate', 
    (req, res, next) => {
        next();  // Poursuit l'exécution de la fonction suivante (validateCartAndCreateOrder)
    },
    validateCartAndCreateOrder);

module.exports = orderRouter;