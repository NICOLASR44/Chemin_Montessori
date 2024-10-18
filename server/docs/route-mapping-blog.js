/* eslint-disable no-underscore-dangle */

// Route pour /blog

// POST  blog/create/user/:id
export const _createArticle = {
  title:"string", // Le titre de l'article de blog
  content:"string",  // Le contenu de l'article
  published_date:"date", // renseigné automatiquement
  user_id: "number", // renseigné automatiquement
  image:"string", // la source de l'image

  // Cette commande publie un article associé à l'utilisateur.
};

// GET blog/
export const _browseBlog = {
  id: "number",
  title: "string",
  content:"string",
  image: "text",

  // Cette commande récupère tous les articles de blog.
};

// GET blog/:id
export const _readBlogArticle = {
  title: "string",
  content:"string",
  image: "text",

  // Cette commande récupère tout l'article de blog avec son id.
};

// PUT  blog/:id
export const _editBlogArticle = {
  title:"string", // Le titre de l'article de blog
  content:"string",  // Le contenu de l'article
  image:"string", // la source de l'image

  // Cette commande modifie un article associé à son id.
};

// DELETE  blog/:id
export const _deleteBlogArticle = {

  // Cette commande supprime un article associé à son id.
};

