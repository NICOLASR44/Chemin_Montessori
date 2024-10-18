const express = require("express");
const upload = require('../../../middleware/multer');

const blogRouter = express.Router();
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  createArticle,
  browseBlog,
  readBlogArticle,
  editBlogArticle,
  deleteBlogArticle,
  browseSample,
} = require("../../../controllers/blogActions");

// Route to post a blogArcticle
blogRouter.post("/create/user/:id", createArticle);

// Route to get a list of items
blogRouter.get("/", browseBlog);

blogRouter.get("/sample", browseSample);

// Route to get an items by id
blogRouter.get("/:id", readBlogArticle);

// Route to edit article
blogRouter.put("/:id",upload, editBlogArticle);

// Route to delete article
blogRouter.delete("/:id", deleteBlogArticle);

/* ************************************************************************* */

module.exports = blogRouter;
