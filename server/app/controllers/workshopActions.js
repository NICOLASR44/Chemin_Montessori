/* eslint-disable camelcase */
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const workshops = await tables.workshop.readAll();
    res.json(workshops);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readFree = async (req, res, next) => {
  try {
    const freeWorkshop = await tables.workshop.readFree();
    res.json(freeWorkshop);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readPaid = async (req, res, next) => {
  try {
    const paidWorkshop = await tables.workshop.readPaid();
    res.json(paidWorkshop);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const workshopId = await tables.workshop.readId(id);

    if (workshopId == null) {
      res.sendStatus(404);
    } else {
      res.json(workshopId);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const suggested = async (req, res, next) => {
  try {
    const { id } = req.params;
    const suggestedWorkshop = await tables.workshop.suggested(id);
    if (suggestedWorkshop == null) {
      res.sendStatus(404);
    } else {
      res.json(suggestedWorkshop);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readPurchased = async (req, res, next) => {
  try {
    const { id } = req.params;
    const purchased = await tables.workshop.readPurchased(id);
    if (purchased === null ) {
        res.sendStatus(404);
      } else {
        res.json(purchased);
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

const readAllDetailsWorkshop = async (req, res, next) => {
  try {
    const workshops = await tables.workshop.readAllDetailsWorkshop();
    res.json(workshops);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readDetailsWorkshop = async (req, res, next) => {
  try {
    const { id } = req.params;
    const workshopDetails = await tables.workshop.readDetails(id);

    if (workshopDetails == null) {
      res.sendStatus(404);
    } else {
      res.json(workshopDetails);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addWorkshop = async (req, res, next) => {
  const { title, price_ht, description } = req.body;
  const imagePath = req.files
    ? `/images/workshop/${req.files.image[0].filename}`
    : null;

  const newWorkShop = { title, price_ht, description, image: imagePath };
  try {
    const insertId = await tables.workshop.create(newWorkShop);

    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addVideoToWorkshop = async (req, res, next) => {
  const { sections } = req.body;
  console.info("Received Files:", req.files);

  const videoData = Array.isArray(sections)
    ? sections.map((section, index) => {
        const videoImageField = `sections[${index}][video_image]`;
        const imagePath = req.files?.[videoImageField]
          ? `/images/workshop/${req.files[videoImageField][0].filename}`
          : null;

        return {
          title: section.title,
          description: section.description,
          source: section.source,
          duration: section.duration,
          section: section.section,
          image: imagePath,
        };
      })
    : [];

  console.info("Video Data:", videoData);

  try {
    const { id } = req.params;
    const insertId = await tables.workshop.addVideo(videoData, id);

    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Erreur lors de l'ajout de la vidéo:", err);
    next(err);
  }
};

const updateWorkshop = async (req, res, next) => {
  const { title, price_ht, description } = req.body;
  const imagePath =
    req.files && req.files.image
      ? `/images/workshop/${req.files.image[0].filename}`
      : null;

  const updateWorkShop = {
    title,
    price_ht: parseFloat(price_ht),
    description,
    image: imagePath,
  };

  try {
    const { id } = req.params;
    const updateId = await tables.workshop.updateWorkshop(updateWorkShop, id);

    res.status(201).json({ updateId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateVideoFromWorkshop = async (req, res, next) => {
  const imagePaths = [];

  // On suppose que sections est un tableau dans req.body
  const sections = req.body.sections || []; 
  for (let i = 0; i < sections.length; i+=1) {
    const videoImageField = `sections[${i}][video_image]`;
    // Vérifie si le champ existe dans req.files
    if (req.files[videoImageField] && req.files[videoImageField].length > 0) {
      const imagePath = `/images/workshop/${req.files[videoImageField][0].filename}`;
      imagePaths.push(imagePath);
    }
  }
  // Créer videoData en fonction des sections et des images
  const videoData = {
    sections: sections.map((section, index) => ({
      ...section,
      video_image: imagePaths[index] || null,
    })),
  };
  try {
    const { id } = req.params;
    const updateId = await tables.workshop.updateVideo(videoData.sections, id);
    
    res.status(200).json({ updateId });
  } catch (err) {
    console.error("Error updating video:", err);
    next(err);
  }
};

const deleteVideoFromWorkshop = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await tables.workshop.deleteVideo(id);

    if (result.affectedRows > 0) {
      res.status(204).send("Ok, delete");
    } else {
      res.status(404).json({ message: "Video not found" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteWorkshop = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await tables.workshop.deleteWorkshop(id);

    if (result.affectedRows > 0) {
      res.status(204).send("Ok, delete");
    } else {
      res.status(404).json({ message: "Workshop not found" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  browse,
  readFree,
  readPaid,
  readId,
  suggested,
  readPurchased,
  readAllDetailsWorkshop,
  readDetailsWorkshop,
  addWorkshop,
  addVideoToWorkshop,
  updateWorkshop,
  updateVideoFromWorkshop,
  deleteVideoFromWorkshop,
  deleteWorkshop,
};
