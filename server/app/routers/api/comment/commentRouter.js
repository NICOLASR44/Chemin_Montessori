const express = require("express");

const commentRouter = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  readWorkshopComment,
  readUserComment,
  postComment,
  browse,
  readNotActive,
  editCommentVisibility,
  deleteComment,
} = require("../../../controllers/commentActions");

// Route to get a list of items
commentRouter.get("/", browse);
commentRouter.get("/not-active/", readNotActive);
commentRouter.get("/workshop/:id", readWorkshopComment);
commentRouter.get("/user/:id", readUserComment);

// Route to post a comment
commentRouter.post("/user/:id/workshop/:id", postComment);

// Route to update a comment
commentRouter.put("/status/:id", editCommentVisibility);

// Route to delete a comment
commentRouter.delete("/:id", deleteComment);

/* ************************************************************************* */

module.exports = commentRouter;
