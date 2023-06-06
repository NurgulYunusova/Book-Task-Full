const express = require("express");
const { writerController } = require("../controllers/writerController");
const { body } = require("express-validator");
const { validate } = require("../middleware/validation");

const writerRoutes = express.Router();

writerRoutes.get("/", writerController.getAll);

writerRoutes.get("/:id", writerController.getById);

writerRoutes.post("/", writerController.add);

writerRoutes.delete("/:id", writerController.deleteById);

module.exports = {
  writerRoutes,
};
