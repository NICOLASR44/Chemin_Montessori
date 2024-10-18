const argon2 = require("argon2");

const hashPassword = async (password) => {
  try {
    // Hache le mot de passe avec argon2
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (error) {
    console.error("Erreur lors du hachage du mot de passe:", error);
    throw new Error("Impossible de hacher le mot de passe");
  }
};

const verifyPassword = async (hashedPassword, plainPassword) => {
  try {
    // Vérifie si le mot de passe est valide
    const isMatch = await argon2.verify(hashedPassword, plainPassword);
    return isMatch; // Renvoie true si le mot de passe correspond, sinon false
  } catch (error) {
    console.error("Erreur lors de la vérification du mot de passe:", error);
    throw new Error("Impossible de vérifier le mot de passe");
  }
};

module.exports = { hashPassword, verifyPassword };
