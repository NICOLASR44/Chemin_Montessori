/* eslint-disable no-underscore-dangle */

// resource

// /resource/workshop/:id
export const _readResourceFromWorkshop = {
  transcript_pdf: "string", // Le lien ou chemin du fichier PDF de la transcription
  file_zip: "string", // Le lien ou chemin du fichier ZIP
  workshop_id: "number", // L'ID de l'atelier

  // Conditions :
  // - Les ressources sont filtrées par l'ID de l'atelier (workshop_id = ?)
};

export const _resource = {};
