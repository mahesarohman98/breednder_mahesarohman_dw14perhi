"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      no_rek: DataTypes.STRING,
      proof_of_transfer: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.user, { foreignKey: "userId", as: "user" });
  };
  return payment;
};
