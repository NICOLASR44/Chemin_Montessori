/* eslint-disable no-underscore-dangle */

// /user

// GET /user/:id
export const _readUserById = {
  firstname: "string", // Le prénom de l'utilisateur
  lastname: "string", // Le nom de famille de l'utilisateur
  username: "string", // Le nom d'utilisateur
  email: "string", // L'adresse e-mail de l'utilisateur
  newsletter: "boolean", // Si l'utilisateur est abonné à la newsletter (true/false)
  avatar: "string", // L'avatar de l'utilisateur
  // Conditions :
  // - Les informations sont filtrées par l'ID de l'utilisateur (user.id = ?)
};

// PUT /user/:id
export const _updateUserInfo = {
  firstname: "string", // Le prénom de l'utilisateur
  lastname: "string", // Le nom de famille de l'utilisateur
  username: "string", // Le nom d'utilisateur
  email: "string", // L'adresse e-mail de l'utilisateur
  newsletter: "boolean", // Si l'utilisateur est abonné à la newsletter (true/false)
  avatar: "string", // L'avatar de l'utilisateur

  // Cette route permet de modifier les informations de l'utilisateur.
  // Conditions :
  // - Les informations sont filtrées par l'ID de l'utilisateur (user.id = ?)
};

// POST /user/
export const _createNewUser = {
  firstname: "string", // Le prénom de l'utilisateur
  lastname: "string", // Le nom de famille de l'utilisateur
  username: "string", // Le nom d'utilisateur
  email: "string", // L'adresse e-mail de l'utilisateur
  password: "string", // Le mot de passe de l'utilisateur
  newsletter: "boolean", // Si l'utilisateur est abonné à la newsletter (true/false)
  
  // Cette route permet de créer un nouvel utilisateur.
};
