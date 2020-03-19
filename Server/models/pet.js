"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      speciesId: DataTypes.INTEGER,
      ageId: DataTypes.INTEGER,
      about: DataTypes.STRING,
      photo: DataTypes.STRING
    },
    {}
  );
  pet.associate = function(models) {
    pet.belongsTo(models.user, { foreignKey: "userId", as: "breeder" });
    pet.belongsTo(models.age, { foreignKey: "ageId", as: "age" });
    pet.belongsTo(models.species, { foreignKey: "speciesId", as: "species" });

    pet.belongsToMany(pet, {
      through: models.pet_liked,
      as: "pet_id",
      foreignKey: "pet_id"
    });
    pet.belongsToMany(pet, {
      through: models.pet_liked,
      as: "pet_id_liked",
      foreignKey: "pet_id_liked"
    });
  };
  return pet;
};
