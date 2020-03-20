const express = require("express");
const router = express.Router();
const {
  find,
  findStatus,
  findAll,
  check,
  create,
  update,
  destroy
} = require("../controllers/match");
const { auth } = require("../middleware/auth");

router.post("/", auth, create);
router.get("/", auth, check);
router.get("/:id", auth, findAll);
router.put("/:id", auth, update);
router.delete("/:id", auth, destroy);
router.patch("/", auth, findStatus);

module.exports = router;
