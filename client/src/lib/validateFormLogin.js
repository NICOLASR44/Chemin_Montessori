const validateFormLogin = (formData) => {
  const newErrors = {}; // Objet qui va stocker les erreurs de validation

  // Switch basé sur plusieurs conditions, vérifiant la validité des champs
  switch (true) {
    // Vérification si le nom d'utilisateur est vide
    case !formData.username:
      newErrors.username = "Le pseudo de l'utilisateur est requis";
      break;

    // Vérification si le mot de passe est vide
    case !formData.password:
      newErrors.password = "Le mot de passe est requis";
      break;

    default:
      break;
  }

  // Retourne l'objet newErrors avec toutes les erreurs détectées
  return newErrors;
};
export default validateFormLogin;
