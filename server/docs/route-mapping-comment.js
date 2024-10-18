/* eslint-disable no-underscore-dangle */

// Route pour /comment

// /comment/workshop/:id
export const _readWorkshopComment = {
  comment: "string", // Le commentaire de l'utilisateur
  username: "string", // Le nom d'utilisateur
  avatar: "string", // L'avatar de l'utilisateur
  // Cette commande récupère tous les avis sur un atelier
  // Conditions :
  // - Les avis sont filtrés par l'ID du workshop (workshop_id = ?)
  // - Les avis actifs uniquement (review.is_active = 1)
  // - Les avis sont triés par ordre décroissant selon l'ID (ORDER BY review.id DESC)
  // - Limite à 3 résultats (LIMIT 3)
};

// /comment/user/:id
export const _readUserComments = {
  comment: "string",
  // Cette commande récupère tous les commentaires de l'utilisateur.
  // Conditions :
  // - Les commentaires sont filtrés par l'ID de l'utilisateur (user.id = ?)
};
