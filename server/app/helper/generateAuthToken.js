const jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    status: user.status,
  };

  // Utiliser la variable d'environnement JWT_SECRET pour signer le token
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return token;
};

module.exports = { generateAuthToken };
