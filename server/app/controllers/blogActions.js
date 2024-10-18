// Import access to database tables
const tables = require("../../database/tables");

const createArticle = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const article = req.body;
    const insertId = await tables.blog.createArticle(article, userId);

    if (insertId) {
      res.status(201).json({ message: "Article posté", insertId });
    } else {
      res
        .status(500)
        .json({ message: "Erreur lors de la publication de l'article" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const browseBlog = async (req, res, next) => {
  try {
    const blog = await tables.blog.browseBlog();
    // Respond with the blog in JSON format
    res.json(blog);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const browseSample = async (req, res, next) => {
  try {
    const blog = await tables.blog.browseSample();
    // Respond with the blog in JSON format
    res.json(blog);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readBlogArticle = async (req, res, next) => {
  try {
    const blog = await tables.blog.readBlogArticle(req.params.id);
    if (blog == null) {
      res.sendStatus(404);
    } else {
      res.json(blog);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const editBlogArticle = async (req, res, next) => {
  const { title, content} = req.body;
  const imagePath = req.files?.blog_image?.[0]?.filename
  ? `/images/blog/${req.files.blog_image[0].filename}`
  : null;
// console.log("body", req.body)
// console.log("files", req.files)

  const updateBlog = {
    title,
    content,
    image: imagePath,
  };
  // console.log("infos", updateBlog);
  
  try {
    const { id } = req.params;
    const result = await tables.blog.editBlogArticle(updateBlog, id);
    // console.log("id", req.params);
    res.status(201).send({
      message: "La modification a bien été prise en compte",
      result,
      });
    } catch (err) {
      next(err);
    }
};

const deleteBlogArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await tables.blog.deleteBlogArticle(id);

    if (blog == null) {
      res.sendStatus(404);
    } else {
      res.json(blog);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  createArticle,
  browseBlog,
  readBlogArticle,
  editBlogArticle,
  deleteBlogArticle,
  browseSample,
};
