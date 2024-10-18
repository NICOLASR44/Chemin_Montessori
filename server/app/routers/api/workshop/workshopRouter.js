const express = require("express");
const upload = require('../../../middleware/multer');

const workshopRouter = express.Router();


const {
  browse,
  readFree,
  readPaid,
  readId,
  suggested,
  readPurchased,
  readDetailsWorkshop,
  readAllDetailsWorkshop,
  addWorkshop,
  addVideoToWorkshop,
  updateWorkshop,
  updateVideoFromWorkshop,
  deleteVideoFromWorkshop,
  deleteWorkshop,
} = require("../../../controllers/workshopActions");

// http://localhost:3310/api/workshop
workshopRouter.get("/", browse);
workshopRouter.get("/free", readFree);
workshopRouter.get("/paid", readPaid);
workshopRouter.get("/video/:id", readId);
workshopRouter.get("/suggested/user/:id", suggested);
workshopRouter.get("/purchase/user/:id", readPurchased);
workshopRouter.get("/details/:id", readDetailsWorkshop);
workshopRouter.get("/details", readAllDetailsWorkshop);

workshopRouter.post("/video/:id", upload, addVideoToWorkshop);
workshopRouter.post("/",upload, addWorkshop);

workshopRouter.put("/:id", upload, updateWorkshop);
workshopRouter.put("/video/:id", upload, updateVideoFromWorkshop);

workshopRouter.delete("/video/:id", deleteVideoFromWorkshop);
workshopRouter.delete("/:id", deleteWorkshop);

module.exports = workshopRouter;
