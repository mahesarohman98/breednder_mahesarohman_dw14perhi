const models = require("../../../models");

const Ages = models.age;

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const ages = await Ages.create({ name });
    const data = await Ages.findOne({ where: { name } });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Ages.findAll();
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
