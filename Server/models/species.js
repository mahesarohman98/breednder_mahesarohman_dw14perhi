"use strict";
module.exports = (sequelize, DataTypes) => {
  const species = sequelize.define(
    "species",
    {
      name: DataTypes.STRING
    },
    {}
  );
  species.associate = function(models) {
    species.hasMany(models.pet, { as: "species" });
  };
  return species;
};
