// Import access to database tables
const tables = require("../../database/tables");

const readWorkshopComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comments = await tables.comment.readWorkshopComment(id);

    if (comments == null) {
      res.sendStatus(404);
    } else {
      res.json(comments);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
const readUserComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comments = await tables.comment.readUserComment(id);

    if (comments == null) {
      res.sendStatus(404);
    } else {
      res.json(comments);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const postComment = async (req, res, next) => {
  try {
    const { userId, workshopId } = req.params;
    const comment = req.body;
    const insertId = await tables.comment.postComment(
      userId,
      workshopId,
      comment
    );

    if (insertId.affectedRows > 0) {
      res.status(201).json({ message: "Commentaire posté", insertId });
    } else {
      res
        .status(500)
        .json({ message: "Erreur lors de l'ajout du commentaire" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    const comments = await tables.comment.browse();
    if (comments == null) {
      res.sendStatus(404);
    } else {
      res.json(comments);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readNotActive = async (req, res, next) => {
  try {
    const comments = await tables.comment.readNotActive();
    if (comments == null) {
      res.sendStatus(404);
    } else {
      res.json(comments);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const editCommentVisibility = async (req, res, next) => {
  try {
    const { id } = req.params;
    const commentInfo = req.body;

    const updateId = await tables.comment.update(id, commentInfo);

    res.status(201).json({ updateId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteId = await tables.comment.delete(id);

    res.status(204).json({ deleteId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  readWorkshopComment,
  readUserComment,
  postComment,
  browse,
  readNotActive,
  editCommentVisibility,
  deleteComment,
};
