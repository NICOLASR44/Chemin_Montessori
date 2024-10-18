const postFetcher = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Vérifie si la réponse est correcte (statut HTTP 2xx)
    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorDetails = await response.json();
        throw new Error(
          errorDetails.message || "Erreur lors de l'envoi des données"
        );
      } else {
        const errorText = await response.text();
        throw new Error(
          `Erreur ${response.status} sur ${url}: ${errorText || "Erreur du serveur"}`
        );
      }
    }

    // Retourner les données JSON si tout est OK
    return await response.json();
  } catch (error) {
    console.error("Erreur dans postFetcher:", error.message);
    throw error;
  }
};

export default postFetcher;
