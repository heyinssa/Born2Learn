import { Sequelize, DataTypes } from '../database.js';

const User = Sequelize.define(
  'user',
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByUserId(user_id) {
  return User.findOne({
    where: { user_id },
  });
}

async function create(
  id, //
  password,
) {
  return User.create({
    id,
    password,
  }).then(data => this.getByUserId(data.dataValues.user_id));
}

async function update(
  user_id, //
  id,
  password,
) {
  return User.findByPk(user_id).then(user => {
    user.id = id;
    user.password = password;
    return user.save().then(data => this.getByUserId(data.dataValues.user_id));
  });
}

async function remove(user_id) {
  return User.findByPk(user_id).ten(user => user.destroy());
}

export default {
  getByUserId,
  create,
  update,
  remove,
};
