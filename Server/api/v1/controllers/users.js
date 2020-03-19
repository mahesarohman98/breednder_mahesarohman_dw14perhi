const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../../../models");
const saltRounds = 10;
const User = models.user;

const {
  createUser,
  findUser,
  updateUser,
  deleteUser
} = require("../helper/userHelper");

const { createPet } = require("../helper/petHelper");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const result = await bcrypt.compare(password, user.password);
    if (user && result) {
      const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
      const id = user.id;
      const data = { id, token };
      res.status(200).send({ data });
    } else {
      res.status(401).send({ message: "Invalid login" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.register = async (req, res) => {
  try {
    const user = await createUser(req.body);
    const pet = await createPet(req.pet, user);
    const token = jwt.sign({ userId: user }, process.env.SECRET_KEY);
    const email = req.body.email;
    const data = { user, token };
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await findUser(id);
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.roles == "Admin" || req.user == id) {
      await updateUser(req.body, id);
      const data = await findUser(id);
      res.status(200).send({ data });
    } else {
      res.status(401).send({ error: "Not authorized to access this resource" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.roles == "Admin" || req.user == id) {
      await deleteUser(id);
      res.status(200).send({ message: "Success" });
    } else {
      res.status(401).send({ error: "Not authorized to access this resource" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.check = async (req, res) => {
  try {
    const id = req.user;
    console.log(id);

    const data = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"]
      }
    });
    if (data) {
      res.status(200).send({ status: true, message: "succes", data });
    } else {
      res
        .status(404)
        .send({ status: false, message: "user not found", data: {} });
    }
  } catch (err) {
    res
      .status(404)
      .send({ status: false, message: "Authorization not Allowed" });
  }
};
