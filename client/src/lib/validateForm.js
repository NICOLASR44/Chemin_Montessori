const validateForm = (formData, isLogin) => {
  const newErrors = {}; // Objet qui va stocker les erreurs de validation

  // Expression régulière pour valider le mot de passe :
  // - Au moins une majuscule
  // - Au moins une minuscule
  // - Au moins un chiffre
  // - Au moins un caractère spécial
  // - Minimum de 8 caractères
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  // Switch basé sur plusieurs conditions, vérifiant la validité des champs
  switch (true) {
    // Vérification si le prénom est vide
    case !formData.firstname:
      newErrors.firstname = "Le prénom de l'utilisateur est requis";
      break;

    // Vérification si le nom est vide
    case !formData.lastname:
      newErrors.lastname = "Le nom de l'utilisateur est requis";
      break;

    // Vérification si le nom d'utilisateur est vide
    case !formData.username:
      newErrors.username = "Le pseudo de l'utilisateur est requis";
      break;

    // Vérification si le mot de passe est vide
    case !formData.password:
      newErrors.password = "Le mot de passe est requis";
      break;

    // Vérification si le mot de passe respecte les critères définis dans la regex
    case !passwordRegex.test(formData.password):
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, minuscule, un chiffre et un caractère spécial";
      break;

    // Si on est dans le mode d'inscription, vérifie si le mot de passe et sa confirmation correspondent
    case !isLogin && formData.password !== formData.confirmPassword:
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
      break;

    // Si on est en inscription, vérifie si l'email est valide
    case !isLogin && !/\S+@\S+\.\S+/.test(formData.email):
      newErrors.email = "Email invalide";
      break;

    // Si toutes les validations sont passées, il n'y a pas d'erreur
    default:
      break;
  }

  // Retourne l'objet newErrors avec toutes les erreurs détectées
  return newErrors;
};

export default validateForm;
