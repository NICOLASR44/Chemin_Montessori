const Joi = require("joi");

// Schéma pour la validation de l'inscription
const validateUser = (user) => {
  // Regex pour valider les emails
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const schema = Joi.object({
    firstname: Joi.string().min(2).max(50).required().messages({
      "string.empty": "Le prénom est requis",
      "string.min": "Le prénom doit comporter au moins 2 caractères",
      "string.max": "Le prénom ne peut pas dépasser 50 caractères",
    }),

    lastname: Joi.string().min(2).max(50).required().messages({
      "string.empty": "Le nom est requis",
      "string.min": "Le nom doit comporter au moins 2 caractères",
      "string.max": "Le nom ne peut pas dépasser 50 caractères",
    }),

    username: Joi.string().min(3).max(30).required().messages({
      "string.empty": "Le pseudo est requis",
      "string.min": "Le pseudo doit comporter au moins 3 caractères",
      "string.max": "Le pseudo ne peut pas dépasser 30 caractères",
    }),

    email: Joi.string().pattern(emailRegex).required().messages({
      "string.empty": "L'adresse e-mail est requise",
      "string.pattern.base": "L'adresse e-mail doit être valide",
    }),

    password: Joi.string()
      .pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Regex pour le mot de passe
      )
      .required()
      .messages({
        "string.empty": "Le mot de passe est requis",
        "string.pattern.base":
          "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
      }),

    // Champ pour la confirmation du mot de passe (non requis mais vérifié s'il est présent)
    confirmPassword: Joi.any().valid(Joi.ref("password")).messages({
      "any.only": "Les mots de passe ne correspondent pas",
    }),

    // Validation pour la newsletter (booléen)
    newsletter: Joi.boolean().required().messages({
      "boolean.base": "Le champ newsletter doit être vrai ou faux",
      "any.required": "L'option newsletter est requise",
    }),
  });

  const { error } = schema.validate(user, { abortEarly: false });

  if (error) {
    const errorMessage = error.details.map((err) => ({
      message: err.message,
    }));
    return {
      errorCount: error.details.length,
      errorMessage,
    };
  }

  return {
    errorCount: 0,
    errorMessage: [],
  };
};

// Schéma pour la validation du login
const validateLogin = (loginInfo) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
      "string.empty": "Le pseudo est requis",
      "string.min": "Le pseudo doit comporter au moins 3 caractères",
      "string.max": "Le pseudo ne peut pas dépasser 30 caractères",
    }),

    password: Joi.string().required().messages({
      "string.empty": "Le mot de passe est requis",
    }),
  });

  const { error } = schema.validate(loginInfo, { abortEarly: false });

  if (error) {
    const errorMessage = error.details.map((err) => ({
      message: err.message,
    }));
    return {
      errorCount: error.details.length,
      errorMessage,
    };
  }

  return {
    errorCount: 0,
    errorMessage: [],
  };
};

module.exports = { validateUser, validateLogin };
