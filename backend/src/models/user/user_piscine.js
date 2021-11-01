import { Sequelize, DataTypes } from '../database.js';

const UserPiscine = Sequelize.define(
  'user_piscine',
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    piscine_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'piscine',
        key: 'piscine_id',
      },
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByUserId(user_id) {
  return UserPiscine.find({
    where: { user_id },
  });
}

async function getByPiscineId(piscine_id) {
  return UserPiscine.find({
    where: { piscine_id },
  });
}

async function getByUserPiscineId(user_id, piscine_id) {
  return UserPiscine.findOne({
    where: { user_id, piscine_id },
  });
}

async function create(
  user_id, //
  piscine_id,
) {
  return UserPiscine.create({
    user_id,
    piscine_id,
  }).then(data =>
    getByUserPiscineId(data.dataValues.user_id, data.dataValues.piscine_id),
  );
}

async function remove(user_id, piscine_id) {
  return getByUserPiscineId(user_id, piscine_id).then(user_piscine =>
    user_piscine.destroy(),
  );
}

async function removeByUserId(user_id) {
  return UserPiscine.destroy({
    user_id,
  });
}

async function removeByPiscineId(piscine_id) {
  return UserPiscine.destroy({
    piscine_id,
  });
}

export default {
  getByUserId,
  getByPiscineId,
  create,
  remove,
  removeByUserId,
  removeByPiscineId,
};
