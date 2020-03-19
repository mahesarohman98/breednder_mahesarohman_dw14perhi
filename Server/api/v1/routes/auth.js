const express = require("express");
const router = express.Router();
const {
  login,
  register,
  find,
  update,
  destroy,
  check
} = require("../controllers/users");
const { auth } = require("../middleware/auth");

router.get("/", auth, check);

module.exports = router;
