const express = require("express");
const router = express.Router();
const {
  find,
  findAll,
  create,
  update,
  destroy,
  findMyPet
} = require("../controllers/pet");
const { auth } = require("../middleware/auth");

router.get("/", auth, findMyPet);

module.exports = router;
