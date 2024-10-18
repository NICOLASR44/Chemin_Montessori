const express = require("express");
const upload = require('../../../middleware/multer');

const resourceRouter = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  read,
  addResource,
  updateResource,
  deleteResource,
} = require("../../../controllers/resourceActions");

// Route to get a list of items
resourceRouter.get("/workshop/:id", read);

// resourceRouter.post("/workshop/:id", upload.fields([{ name: 'transcript_pdf' }, { name: 'file_zip' }]), addResource);
resourceRouter.post("/workshop/:id",upload, addResource);

resourceRouter.put("/workshop/:id", upload, updateResource);

resourceRouter.delete("/workshop/:id", deleteResource);

/* ************************************************************************* */

module.exports = resourceRouter;
