const express = require("express");
const router = express.Router();
const { create, findAll } = require("../controllers/ages");
const { auth } = require("../middleware/auth");

router.post("/", create);
router.get("/", findAll);

module.exports = router;
