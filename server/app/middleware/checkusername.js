const UserRepository = require("../../database/models/UserRepository");

const userRepo = new UserRepository();

const checkusername = async (req, res, next) => {
  try {
    const { username } = req.body;

    // Vérifier si le nom d'utilisateur existe dans la base de données
    const user = await userRepo.findByUsername(username);

    if (!user) {
      return res.json({
        isAvailable: true,
        message: "Nom d'utilisateur disponible",
      });
    }

    return next();
  } catch (err) {
    console.error("Error in checkusername middleware:", err);
    // Log pour voir les erreurs
    return next(err); // Gérer toute erreur
  }
};

module.exports = checkusername;
