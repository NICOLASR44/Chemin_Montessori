const express = require("express");
const upload = require("../../../middleware/multer");

const userRouter = express.Router();
const authMidlleware = require("../../../middleware/authMiddleware");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  checkauth,
  createNewUser,
  browse,
  readOrder,
  loginUser,
  logoutUser,
  readId,
  editUserInfo,
} = require("../../../controllers/userActions");

// Route to get a list of items
userRouter.get("/checkauth", authMidlleware, checkauth); // Merci de laisser cette route en 1er
userRouter.get("/", browse);
userRouter.get("/:id", readId);
userRouter.get("/order/:id", readOrder);
userRouter.put("/:id", upload, editUserInfo);
userRouter.post("/", createNewUser);
// userRouter.post("/checkusername", checkusername);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

userRouter.get("/:id", readId);
userRouter.put("/:id", editUserInfo);
/* ************************************************************************* */

module.exports = userRouter;
