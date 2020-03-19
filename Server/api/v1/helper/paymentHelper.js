const models = require("../../../models");

const Payment = models.payment;
const User = models.user;

exports.findPayment = async (id, userId) => {
  try {
    if (id != null) {
      const data = await Payment.findOne({
        where: { id },
        include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "name", "address", "phone"]
          }
        ],
        attributes: { exclude: ["speciesId", "userId", "ageId"] }
      });
      return data;
    } else if (userId != null) {
      const data = await Payment.findOne({
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
      return data;
    } else {
      const data = await Payment.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "name", "address", "phone"]
          }
        ],
        attributes: { exclude: ["speciesId", "userId", "ageId"] }
      });
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

exports.createPayment = async (data, userRoles, userId) => {
  try {
    const { no_rek, proof_of_transfer, status } = data;
    if (userRoles == "User") {
      const payment = await Payment.create({
        no_rek,
        proof_of_transfer,
        status: "Free",
        userId,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    } else {
      const payment = await Payment.create({
        no_rek,
        proof_of_transfer,
        status,
        userId,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.updatePayment = async (data, userId) => {
  const { no_rek, proof_of_transfer, status } = data;
  try {
    const payment = await Payment.update(
      {
        no_rek,
        proof_of_transfer,
        status,
        updatedAt: new Date()
      },
      {
        where: { userId }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
