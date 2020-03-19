const models = require("../../../models");

const Payment = models.payment;
const User = models.user;
const { createPayment, findPayment } = require("../helper/paymentHelper");

exports.find = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.findAll = async (req, res) => {
  try {
  } catch (err) {}
};

exports.create = async (req, res) => {
  try {
    const { no_rek, proof_of_transfer, status } = req.body;
    const userId = req.user;
    const userRoles = req.roles;
    const check = await findPayment((id = null), userId);
    if (check == null) {
      await createPayment(req.body, userRoles, userId);
      const data = await findPayment((id = null), userId);
      res.status(200).send({ data });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { no_rek, proof_of_transfer, status } = req.body;
    const userId = req.user;
    const userRoles = req.roles;

    if (userRoles == "Admin") {
      const payment = await updatePayment(req.body, userId);

      const data = await Payment.findAll({
        where: { userId },
        include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "name", "address", "phone"]
          }
        ],
        attributes: { exclude: ["speciesId", "userId", "ageId"] }
      });
      res.status(200).send({ data });
    } else {
      res.status(204).send();
    }
  } catch (err) {}
};

exports.destroy = async (req, res) => {
  try {
    res.send("success");
  } catch (err) {
    console.log(err);
  }
};
