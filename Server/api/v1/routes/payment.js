const express = require("express");
const router = express.Router();
const {
  find,
  findAll,
  create,
  update,
  destroy
} = require("../controllers/payment");
const { auth } = require("../middleware/auth");

router.post("/", auth, create);
router.get("/", auth, findAll);
router.get("/:id", auth, find);
router.put("/:id", auth, update);
router.delete("/:id", auth, destroy);

module.exports = router;
