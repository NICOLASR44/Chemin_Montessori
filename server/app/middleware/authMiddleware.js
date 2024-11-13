const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.auth_token; // Récupère le token JWT depuis les cookies

  if (!token) {
    return next(); // Permet de continuer sans interrompre la requête
  }

  try {
    // Vérifie et décode le token après avoir retiré le préfixe "Bearer"
    let actualToken = token;
    if (token.startsWith("Bearer")) {
      [actualToken] = token.split(" ").slice(1); // Récupère le token sans "Bearer"
    }

    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    req.user = { id: decoded.id, status: decoded.status };

    return next(); // Passe au middleware suivant et retourne une valeur

    /* throw new Error("Format de token incorrect"); */
  } catch (err) {
    console.error("Erreur lors de la vérification du token :", err);
    return res
      .status(403)
      .json({ message: "Token invalide ou non valide", error: err.message });
  }
};

module.exports = authMiddleware;
