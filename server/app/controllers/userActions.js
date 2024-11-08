const UserRepository = require("../../database/models/UserRepository");

const userRepo = new UserRepository();

const { hashPassword } = require("../helper/passwordHelper"); // Helper pour le hachage du mot de passe
const { validateUser } = require("../validator/userValidator"); // Validateur des données utilisateur
const { validateLogin } = require("../validator/userValidator"); // Validateur des données de login
const { generateAuthToken } = require("../helper/generateAuthToken");

// Import access to database tables
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.browse();
    res.json(users);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = await tables.user.readOrder(id);

    if (userId == null) {
      res.sendStatus(404);
    }
    res.json(userId);
  } catch (err) {
    next(err);
  }
};

const readId = async (req, res, next) => {
  try {
    const { id } = req.params; // Récupère l'ID de l'utilisateur

    const userId = await tables.user.read(id); // Récupère l'utilisateur dans la base

    if (userId == null) {
      // Si l'utilisateur est introuvable
      console.error("Utilisateur introuvable pour l'ID :", id);
      return res.sendStatus(404); // Renvoie une erreur 404 si l'utilisateur n'est pas trouvé
    }

    return res.json(userId);
  } catch (err) {
    return next(err);
  }
};

const editUserInfo = async (req, res, next) => {
  const { firstname, lastname, username, email, newsletter } = req.body;

  const avatarPath =
    req.files && req.files.avatar
      ? `/images/avatar/${req.files.avatar[0].filename}`
      : null;

  const updateUser = {
    firstname,
    lastname,
    username,
    email,
    avatar: avatarPath,
    newsletter,
  };

  try {
    const { id } = req.params;
    const updateId = await tables.user.update(id, updateUser);

    res.status(201).send({
      message: "La modification a bien été prise en compte",
      updateId,
    });
  } catch (err) {
    next(err);
  }
};

// Vérification authentification user

const checkauth = (req, res) => {
  // Le middleware `authMiddleware` a déjà ajouté `req.user` après avoir décodé le token JWT
  const { id } = req.user; // Extraire l'ID utilisateur depuis `req.user` (décodé par le middleware)

  // Assure-toi que `userId` est défini
  if (!id) {
    return res
      .status(401)
      .json({ message: "Non authentifié - Aucun ID trouvé dans le token" });
  }

  // Requête pour récupérer les informations utilisateur dans la base
  return tables.user
    .read(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Utilisateur introuvable" });
      }

      return res.status(200).json({
        message: "Utilisateur authentifié",
        user,
      });
    })
    .catch((err) => {
      console.error("Erreur lors de la lecture de l'utilisateur :", err);
      return res
        .status(500)
        .json({ message: "Erreur serveur lors de la vérification" });
    });
};

// Création d'un user

const createNewUser = async (req, res, next) => {
  try {
    const userInfo = req.body;
    // Appel au validateur pour vérifier les données utilisateur
    const validationErrors = validateUser(userInfo);
    if (validationErrors.errorCount > 0) {
      return res.status(400).json({
        errors: validationErrors.errorMessage,
      });
    }

    // Convertir la valeur de 'newsletter' en entier (0 ou 1)
    const newsletterValue = userInfo.newsletter ? 1 : 0;

    // Hacher le mot de passe avant de créer l'utilisateur
    const hashedPassword = await hashPassword(
      userInfo.password,
      userInfo.confirmPassword
    );

    // Préparer les données utilisateur avec 'newsletter' converti
    const userWithHashedPassword = {
      ...userInfo,
      password: hashedPassword,
      confirmPassword: hashPassword,
      newsletter: newsletterValue, // Utiliser 0 ou 1 pour MySQL
    };

    // Appel à la base de données pour créer un nouvel utilisateur
    const insertId = await tables.user.createNewUser(userWithHashedPassword);

    // Retourner une réponse avec un statut 201 en cas de succès
    return res.status(201).json({
      message: "L'ajout du User a bien été pris en compte",
      insertId,
    });
  } catch (err) {
    // Passer toute erreur au middleware de gestion des erreurs
    return next(err); // Utiliser return ici aussi pour respecter le consistent return
  }
};

// Connexion utilisateur

const loginUser = async (req, res, next) => {
  try {
    const loginInfo = req.body;

    // Valider les données de login
    const validationErrors = validateLogin(loginInfo);
    if (validationErrors.errorCount > 0) {
      return res.status(400).json({
        errors: validationErrors.errorMessage,
      });
    }

    // Utiliser la méthode loginUser du UserRepository
    const { id, status } = await userRepo.loginUser(
      loginInfo.username,
      loginInfo.password
    );

    // Générer un token JWT
    const token = generateAuthToken({
      id,
      username: loginInfo.username,
      status, // Inclure le statut dans le token
    });

    // Configurer le cookie (utiliser secure: false pour développement)
    res.cookie("auth_token", `Bearer ${token}`, {
      httpOnly: true, // Le cookie n'est pas accessible via JS
      secure: false, // Mettre true en production pour HTTPS
      sameSite: "strict", // Protection contre les attaques CSRF
      maxAge: 24 * 60 * 60 * 1000, // Expire dans 24 heures
    });

    return res.status(200).json({
      message: "Login réussi",
      token,
    });
  } catch (err) {
    if (
      err.message === "Utilisateur non trouvé" ||
      err.message === "Mot de passe incorrect"
    ) {
      return res.status(401).json({ message: err.message });
    }
    return next(err);
  }
};

// Déconnexion utilisateur

const logoutUser = (req, res) => {
  // Suppression du cookie 'auth_token'
  res.clearCookie("auth_token", {
    httpOnly: true, // Assurez-vous que le cookie est sécurisé
    sameSite: "Strict", // Protection contre les attaques CSRF
    secure: false, // Utilisez process.env.NODE_ENV === 'production', en production pour HTTPS
  });

  // Retourner une réponse indiquant que la déconnexion a réussi
  return res.status(200).json({ message: "Déconnexion réussie" });
};

module.exports = {
  readId,
  editUserInfo,
  createNewUser,
  loginUser,
  logoutUser,
  browse,
  readOrder,
  checkauth,
};
