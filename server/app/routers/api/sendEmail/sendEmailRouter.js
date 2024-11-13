const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

require("dotenv").config();

// Route pour envoyer l'email
router.post("/", (req, res) => {
  const { name, email, message, newsletter } = req.body;

  // Configurer Nodemailer avec Gmail
  const transporter = nodemailer.createTransport({
    host: "smtp.laposte.net",
    port: 465, // Utiliser le port sécurisé (SSL/TLS)
    secure: true, // Utiliser SSL/TLS
    auth: {
      user: process.env.LAPOSTE_USER, // Ton adresse email La Poste
      pass: process.env.LAPOSTE_PASS, // Ton mot de passe La Poste
    },
    tls: {
      rejectUnauthorized: false, // Ignorer les certificats auto-signés
    },
  });

  // Options de l'email
  const mailOptions = {
    from: process.env.LAPOSTE_USER, // Utiliser l'email du formulaire comme envoyeur
    to: process.env.LAPOSTE_USER, // Ton adresse email
    subject: `Nouveau message de ${name}`,
    text: `
    Vous avez reçu un nouveau message via le formulaire de contact :
      Nom: ${name}
      Email: ${email}
      Message: ${message}
      Newsletter: ${newsletter ? "Oui" : "Non"}
    `,
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).send({ message: "Erreur lors de l'envoi de l'email" });
    } else {
      res.status(200).send({ message: "Email envoyé avec succès" });
    }
  });
});

module.exports = router;
