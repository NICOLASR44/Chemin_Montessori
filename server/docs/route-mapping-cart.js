/* eslint-disable no-underscore-dangle */

// Route pour /cart

// POST  cart/user/:userId/workshop/:workshopId
export const _addToCart = {
  user_id: "number", // renseigné automatiquement
  workshop_id: "number", // renseigné automatiquement

  // Cette commande ajoute un article au panier associé à l'utilisateur.
};

// GET cart/user/:id
export const _readCart = {
  workshop_id: "number", 
  title:"string", 
  price_ht: "number", 
  tva: "number", 
  total_ttc:"number", 
  total_all_ttc:"number", 
  user_id: "number", // renseigné automatiquement

  // Cette commande récupère tous les articles de cart en fonction de l'utilisateur.
};


// DELETE  cart/user/:id
export const _deleteWorkshopCart = {
  user_id: "number", // renseigné automatiquement
  workshop_id: "number", // renseigné automatiquement

  // Cette commande supprime un article du panier associé à l'utilisateur.
};