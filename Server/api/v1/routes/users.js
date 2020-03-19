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

router.post("/login", login);
router.post("/register", register);
router.get("/:id", find);
router.put("/:id", auth, update);
router.delete("/:id", auth, destroy);
router.get("/auth", auth, check);

module.exports = router;
