const models = require("../../../models");

const Species = models.species;

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const species = await Species.create({ name });
    const data = await Species.findOne({ where: { name } });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Species.findAll();
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
