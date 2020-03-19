const models = require("../../../models");
const Pet = models.pet;
const Species = models.species;
const Age = models.age;
const User = models.user;
const Payment = models.payment;

exports.findPet = async (id, userId) => {
  try {
    if (id != null) {
      const returnData = await Pet.findOne({
        where: { id },
        include: [
          {
            model: User,
            as: "breeder",
            attributes: ["id", "name", "address", "phone"]
          },
          {
            model: Species,
            as: "species",
            attributes: ["id", "name"]
          },
          {
            model: Age,
            as: "age",
            attributes: ["id", "name"]
          }
        ],
        attributes: { exclude: ["speciesId", "userId", "ageId"] }
      });
      return returnData;
    } else if (userId != null) {
      const returnData = await Pet.findOne({
        where: { id },
        include: [
          {
            model: User,
            as: "breeder",
            attributes: ["id", "name", "address", "phone"]
          },
          {
            model: Species,
            as: "species",
            attributes: ["id", "name"]
          },
          {
            model: Age,
            as: "age",
            attributes: ["id", "name"]
          }
        ],
        attributes: { exclude: ["speciesId", "userId", "ageId"] }
      });
      return returnData;
    } else {
      const returnData = await Pet.findAll({
        include: [
          {
            model: User,
            as: "breeder",
            attributes: ["id", "name", "address", "phone"]
          },
          {
            model: Species,
            as: "species",
            attributes: ["id", "name"]
          },
          {
            model: Age,
            as: "age",
            attributes: ["id", "name"]
          }
        ],
        attributes: { exclude: ["speciesId", "userId", "ageId"] }
      });
      return returnData;
    }
  } catch (err) {
    console.log(err);
  }
};

exports.createPet = async (data, userId) => {
  try {
    const { name, gender, speciesId, ageId, about, photo } = data;
    const pet = await Pet.create({
      name,
      gender,
      userId,
      speciesId,
      ageId,
      about,
      photo,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return pet.id;
  } catch (err) {
    console.log(err);
  }
};

exports.updatePet = async (data, id) => {
  try {
    const { name, gender, userId, speciesId, ageId, about, photo } = data;
    console.log("==================================|)----");

    await Pet.update(
      {
        name,
        gender,
        speciesId,
        ageId,
        about,
        photo,
        updatedAt: new Date()
      },
      {
        where: { id }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.deletePet = async () => {};
