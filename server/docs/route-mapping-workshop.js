/* eslint-disable no-underscore-dangle */

// Route Workshop

// workshop/
export const _workshop = {
  id: "number",
  title: "string",
  videoCount: "number",

  // Cette requête récupère le titre et l'id de tous les workshop et le nombre de vidéos associées
};

// /workshop/free
export const _workshopFree = {
  id: "number",
  title: "string",
  priceHt: "number === 0 limit 3",
  tva: "number",
  description: "text",
  image: "text",

  // SQL pour récupérer tous les champs de workshop
  // Conditions : le prix ht = 0
  // Limite la sortie par 3
};

// /workshop/paid
export const _workshopPaid = {
  id: "number",
  title: "string",
  priceHt: "number > 0 by random()",
  tva: "number",
  description: "text",
  image: "text",

  // SQL pour récupérer tous les champs de workshop
  // Conditions : le prix ht est > 0
};

// /workshop/video/:id
export const _workshopVideoID = {
  workshop_id: "number",
  workshop_title: "string",
  video_id: "number",
  video_title: "string",
  video_description: "string",
  video_source: "string",
  video_duration: "number",
  video_image: "string",
  video_section: "number",

  // SQL récupère toutes les vidéos liées à un workshop

  // Condition : récupère par ID de workshop
};

// /workshop/suggested/user/:id
export const _workshopSuggestedUserID = {
  title: "string",
  image: "string",
  price_ht: "number",

  // Sélectionne tous les workshop que user ne possède pas

  // Conditions : par user id et que user ne possède pas.
};

// /workshop/purchased/user/:id
export const _workshopPurchaseUserID = {
  title: "string",
  image: "string",
  price_ht: "number",
  order_date: "string",

  // Sélectionne tous les workshops qu'a acheté l'user

  // Conditions
  // Rangé par ordre d'achat, du plus récent au plus ancien.
};

// /workshop/details/:id
export const _workshopDetails = [
  {
    workshopId: "string",
    title: "string",
    priceHt: "string",
    description: "string",
    image: "string",
    transcriptPDF: "string",
    fileZIP: "string",
    videoTitle: "string",
    videoDescription: "string",
    source: "string",
    duration: "number",
    videoImage: "string",
    section: "number",
  },

  // Attention cette route renvoie un tableau d'objets.
  // Elle est pratique pour obtenir toutes les informations connexes au workshop :
  // les resources et les vidéos.

  // conditions : filtrage par ID
];

// ROUTE POST : /workshop/
export const _workshopPost = {
  title: "string",
  priceHT: "number",
  tva: "number",
  description: "string",
  image: "string",

  // Cette route permet d'enregistrer dans workshop les informations créées sur le panneau ADMIN
  // Attention il faut utiliser cette route conjointement avec le post de resource et video.
};
