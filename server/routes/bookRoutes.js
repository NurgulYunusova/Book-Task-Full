const express = require("express");
const { bookController } = require("../controllers/bookController");
const { body } = require("express-validator");
const { validate } = require("../middleware/validation");

const bookRoutes = express.Router();

bookRoutes.get("/", bookController.getAll);

bookRoutes.get("/:id", bookController.getById);

bookRoutes.post("/", bookController.add);

bookRoutes.delete("/:id", bookController.deleteById);

module.exports = {
  bookRoutes,
};
