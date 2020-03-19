const models = require("../../../models");
const Match = models.pet_liked;
const Pet = models.pet;

exports.checkMatch = async (pet_id, pet_id_liked) => {
  try {
    const isMatch = await Match.findOne({
      where: {
        pet_id,
        pet_id_liked,
        status: "true"
      }
    });
    if (isMatch) {
      return [isMatch.dataValues.pet_id, isMatch.dataValues.pet_id_liked];
    } else {
      const isMatch = await Match.findOne({
        where: {
          pet_id: pet_id_liked,
          pet_id_liked: pet_id,
          status: "true"
        }
      });
      if (isMatch) {
        return [isMatch.dataValues.pet_id, isMatch.dataValues.pet_id_liked];
      } else {
        console.log(isMatch);
        return false;
      }
    }
  } catch (err) {}
};

exports.checkAlreadyLiked = async (pet_id, pet_id_liked) => {
  try {
    const isLiked = await Match.findOne({
      where: {
        pet_id: pet_id_liked,
        pet_id_liked: pet_id
      }
    });
    if (isLiked.pet_id) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
