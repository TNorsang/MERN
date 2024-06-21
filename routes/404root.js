const express = require("express");
const errorRouter = express.Router();
const path = require("path");

errorRouter.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "404error.html"));
});

module.exports = errorRouter;
