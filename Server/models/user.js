"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      userRoles: DataTypes.ENUM("User", "Admin"),
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.hasMany(models.pet, { as: "breeder" });
    user.hasOne(models.payment, { as: "user" });
  };
  return user;
};
