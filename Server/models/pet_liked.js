"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet_liked = sequelize.define(
    "pet_liked",
    {
      pet_id: DataTypes.INTEGER,
      pet_id_liked: DataTypes.INTEGER,
      status: DataTypes.STRING
    },
    {}
  );
  pet_liked.associate = function(models) {
    pet_liked.belongsTo(models.pet, {
      foreignKey: "pet_id",
      as: "pet"
    });
    pet_liked.belongsTo(models.pet, {
      foreignKey: "pet_id_liked",
      as: "liked"
    });
  };
  return pet_liked;
};
