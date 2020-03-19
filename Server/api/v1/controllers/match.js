const models = require("../../../models");
const { checkMatch, checkAlreadyLiked } = require("../helper/match");

const Pet = models.pet;
const User = models.user;
const Species = models.species;
const Age = models.age;
const Match = models.pet_liked;

exports.find = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.findAll = async (req, res) => {
  try {
  } catch (err) {}
};

exports.findStatus = async (req, res) => {
  try {
    const { pet_id, status } = req.query;
    console.log(req.query);

    const pet1 = await Match.findAll({
      where: { pet_id, status }
    });
    const pet2 = await Match.findAll({
      where: { pet_id_liked: pet_id, status }
    });
    const data = [...pet1, ...pet2];
    res.send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.check = async (req, res) => {
  try {
    const { pet_id, pet_id_liked } = req.query;

    const isMatch = await checkMatch(pet_id, pet_id_liked);
    if (isMatch.length > 0) {
      const data = await Match.findOne({
        where: { pet_id: isMatch[0], pet_id_liked: isMatch[1] }
      });
      res.status(200).send(data);
    } else {
      res.send("no");
    }
  } catch (err) {}
};

exports.create = async (req, res) => {
  try {
    const { pet_id, pet_id_liked } = req.body;

    const isAlreadyLiked = await checkAlreadyLiked(pet_id, pet_id_liked);
    if (isAlreadyLiked) {
      const pet = await Match.update(
        {
          status: "true",
          updatedAt: new Date()
        },
        {
          where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
        }
      );
      const data = await Match.findOne({
        where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
      });
      res.status(200).send({ data });
    } else {
      const check = await Match.findOne({
        where: {
          pet_id,
          pet_id_liked
        }
      });
      if (!check) {
        const match = await Match.create({
          pet_id,
          pet_id_liked,
          status: "false",
          createdAt: new Date(),
          updatedAt: new Date()
        });
        const data = await Match.findOne({
          where: { pet_id, pet_id_liked }
        });
        res.status(200).send({ data });
      }
      res.send("");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { pet_id, pet_id_liked, status } = req.body;
    const { id } = req.params;
    const match = await Match.update(
      {
        pet_id,
        pet_id_liked,
        status,
        updatedAt: new Date()
      },
      {
        where: { id }
      }
    );
    const data = await Match.findOne({
      where: { id }
    });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    res.send({ message: "match destroy !" });
  } catch (err) {
    console.log(err);
  }
};
