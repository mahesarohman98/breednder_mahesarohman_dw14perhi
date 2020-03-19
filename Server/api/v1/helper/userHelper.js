const bcrypt = require("bcrypt");
const models = require("../../../models");
const saltRounds = 10;
const User = models.user;

exports.findUser = async (id, email) => {
  try {
    if (id != null) {
      const returnData = await User.findOne({
        where: { id },
        attributes: { exclude: ["userRoles", "password", "id"] }
      });
      return returnData;
    } else if (email != null) {
      const returnData = await User.findOne({
        where: { email },
        attributes: { exclude: ["userRoles", "password", "id", "email"] }
      });
      return returnData;
    } else {
      const returnData = await User.findAll({
        attributes: { exclude: ["userRoles", "password", "id", "email"] }
      });
      return returnData;
    }
  } catch (err) {
    console.log(err);
  }
};

exports.createUser = async data => {
  try {
    const { name, email, password, phone, address } = data;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      userRoles: "User",
      email,
      password: hash,
      phone,
      address
    });
    return user.id;
  } catch (err) {
    console.log(err);
  }
};

exports.updateUser = async (data, id) => {
  try {
    const { name, email, password, phone, address } = data;
    if (password != null) {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      await User.update(
        { name, address, password: hash, phone, updatedAt: new Date() },
        {
          where: { id }
        }
      );
    } else {
      await User.update(
        { name, address, password, phone, updatedAt: new Date() },
        {
          where: { id }
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async id => {
  try {
    await User.destroy({
      where: { id }
    });
  } catch (err) {
    console.log(err);
  }
};
