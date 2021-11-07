import { Sequelize, DataTypes } from '../database.js';
import { PiscineService, UserService } from '../../services/index.js';

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

async function __temp__convert(user_piscine) {
  if (!user_piscine) return user_piscine;

  user_piscine.piscine = await PiscineService.getByPiscineId(
    user_piscine.piscine_id,
  );
  user_piscine.user = await UserService.getByUserId(user_piscine.user_id);

  delete user_piscine.piscine_id;
  delete user_piscine.user_id;

  return user_piscine;
}

async function getByUserId(user_id) {
  const user_piscines = await UserPiscine.findAll({
    where: { user_id },
  });

  const ret = await Promise.all(
    user_piscines.map(user_piscine => {
      return __temp__convert(user_piscine.get({ plain: true }));
    }),
  );

  return ret;
}

async function getByPiscineId(piscine_id) {
  const user_piscines = await UserPiscine.findAll({
    where: { piscine_id },
  });

  const ret = await Promise.all(
    user_piscines.map(user_piscine => {
      return __temp__convert(user_piscine.get({ plain: true }));
    }),
  );

  return ret;
}

async function getByUserPiscineId(user_id, piscine_id) {
  const user_piscine = await UserPiscine.findOne({
    where: { user_id, piscine_id },
  }).then(data => {
    if (data) return data.get({ plain: true });
  });

  return await __temp__convert(user_piscine);
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
  return UserPiscine.destroy({
    where: {
      user_id,
      piscine_id,
    },
  });
}

async function removeByUserId(user_id) {
  return UserPiscine.destroy({
    where: { user_id },
  });
}

async function removeByPiscineId(piscine_id) {
  return UserPiscine.destroy({
    where: { piscine_id },
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
