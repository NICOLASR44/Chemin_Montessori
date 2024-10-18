const express = require("express");

const cartRouter = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { readCart, addToCart, deleteWorkshopCart, deleteCart } = require("../../../controllers/cartActions");

// Route to add a new item
cartRouter.post("/user/:userId/workshop/:workshopId", addToCart);

// Route to get a list of items
cartRouter.get("/user/:id", readCart);

// Route to delete an item
cartRouter.delete("/user/:userId/workshop/:workshopId", deleteWorkshopCart);

// Route to delete cart after order cretion and validation
cartRouter.delete("/user/:userId", deleteCart);

/* ************************************************************************* */

module.exports = cartRouter;
