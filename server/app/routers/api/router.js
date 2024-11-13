const express = require("express");

const router = express.Router();

require("dotenv").config();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const workshopRouter = require("./workshop/workshopRouter");
const commentRouter = require("./comment/commentRouter");
const resourceRouter = require("./resource/resourceRouter");
const userRouter = require("./user/userRouter");
const cartRouter = require("./cart/cartRouter");
const blogRouter = require("./blog/blogRouter");
const authMidlleware = require("../../middleware/authMiddleware");
const orderRouter = require("./order/orderRouter");
const sendEmailRouter = require("./sendEmail/sendEmailRouter");

router.use("/items", itemsRouter);

router.use("/workshop", authMidlleware, workshopRouter);

router.use("/comment", commentRouter);

router.use("/resource", resourceRouter);

router.use("/user", userRouter);

router.use("/cart", cartRouter);

router.use("/blog", blogRouter);

router.use("/order", orderRouter);

router.use("/sendEmail", sendEmailRouter);

/* ************************************************************************* */

module.exports = router;
