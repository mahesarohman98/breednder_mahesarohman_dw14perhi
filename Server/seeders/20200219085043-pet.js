"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {
          userId: "1",
          name: "Gary",
          gender: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
          speciesId: "1",
          ageId: "1"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pets", null, {});
  }
};
