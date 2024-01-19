const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professional");

// get feed/posts
router.get("/", professionalController.getData);

module.exports = router;