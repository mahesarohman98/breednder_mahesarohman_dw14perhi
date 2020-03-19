"use strict";
module.exports = (sequelize, DataTypes) => {
  const age = sequelize.define(
    "age",
    {
      name: DataTypes.STRING
    },
    {}
  );
  age.associate = function(models) {
    age.hasMany(models.pet, { as: "age" });
  };
  return age;
};
