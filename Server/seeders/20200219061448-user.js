"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "123456";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(myPlaintextPassword, salt);
      return queryInterface.bulkInsert(
        "users",
        [
          {
            id: "1",
            email: "mahesa@mail.com",
            password: hash,
            name: "mahesa rohman",
            phone: "082164250000",
            address: "permata bintaro",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );
    } catch (err) {
      console.log(err);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
