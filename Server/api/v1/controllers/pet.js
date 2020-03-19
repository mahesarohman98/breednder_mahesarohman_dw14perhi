const models = require("../../../models");

const Pet = models.pet;
const Payment = models.payment;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const {
  findPet,
  createPet,
  updatePet,
  deletePet
} = require("../helper/petHelper");

exports.find = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await findPet(id);
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const id = req.user;
    const data = await Pet.findAll({
      where: {
        userId: { [Op.not]: id }
      }
    });
    res.status(200).send({ data });
  } catch (err) {}
};

exports.create = async (req, res) => {
  try {
    const { userId } = req.body;
    if (req.user == userId || req.roles == "Admin") {
      const checkPet = await Pet.findAll({ where: { userId } });
      if (checkPet.length >= 1) {
        const checkUser = await Payment.findOne({ where: { userId } });
        if (checkUser == null) {
          res.status(200).send({ message: "You are not premium users!" });
        } else {
          const id = await createPet(req.body, userId);
          const data = await findPet(id);
          res.status(200).send({ data });
        }
      } else {
        const id = await createPet(req.body, userId);
        const data = await findPet(id);
        res.status(200).send({ data });
      }
    } else {
      res.status(401).send({ error: "Not authorized to access this resource" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    console.log(req.user == userId);
    if (req.user == userId || req.roles == "Admin") {
      console.log("==============================)");

      await updatePet(req.body, id);
      const data = await findPet(id);
      res.status(200).send({ data });
    } else {
      res.status(204).send("");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.findMyPet = async (req, res) => {
  try {
    const id = req.user;
    const data = await Pet.findAll({
      where: { userId: id }
    });
    res.send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findOne({ where: { id } });
    if (pet.userId === req.user) {
      await Pet.destroy({ where: { id } });
      res.status(200).send({ message: "Success!" });
    } else {
      res.status(401).send({ error: "Not authorized to access this resource" });
    }
  } catch (err) {
    console.log(err);
  }
};
