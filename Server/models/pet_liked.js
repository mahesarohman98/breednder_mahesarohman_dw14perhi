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
    // pet_liked.hasMany(models.pet, { as: "pet" });
    // pet_liked.hasMany(models.pet, { as: "liked_pet" });
    // pet_liked.hasMany(models.pet_liked, { foreignKey: "pets_id" });
    // pet_liked.hasMany(models.pet_liked, { foreignKey: "liked_pets_id" });
  };
  return pet_liked;
};
