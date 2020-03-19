const express = require("express");
const router = express.Router();
const { create, findAll } = require("../controllers/species");
const { auth } = require("../middleware/auth");

router.post("/", create);
router.get("/", findAll);

module.exports = router;
