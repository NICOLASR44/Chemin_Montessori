// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await tables.resource.readResourceFromWorkshop(id);

    res.json(resource);
  } catch (err) {
    next(err);
  }
};

const addResource = async (req, res, next) => {
  const pdfPath = req.files
    ? `/files/pdfs/${req.files.transcript_pdf[0].filename}`
    : null;
  const zipPath = req.files
    ? `/files/zips/${req.files.file_zip[0].filename}`
    : null;

  const newRessource = { transcript_pdf: pdfPath, file_zip: zipPath };

  try {
    const { id } = req.params;
    const insertId = await tables.resource.createResource(newRessource, id);

    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateResource = async (req, res, next) => {
  let pdfPath = null;
  let zipPath = null;

  if (req.files) {
    if (req.files.transcript_pdf && req.files.transcript_pdf.length > 0) {
      pdfPath = `/files/pdfs/${req.files.transcript_pdf[0].filename}`;
    }
    if (req.files.file_zip && req.files.file_zip.length > 0) {
      zipPath = `/files/zips/${req.files.file_zip[0].filename}`;
    }
  }
  const newRessource = { transcript_pdf: pdfPath, file_zip: zipPath };
  try {
    const { id } = req.params;
    const insertId = await tables.resource.updateResource(newRessource, id);
    
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteResource = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await tables.resource.deleteResource(id);

    if (result.affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  read,
  addResource,
  updateResource,
  deleteResource,
};
