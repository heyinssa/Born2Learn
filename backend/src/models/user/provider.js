import { Sequelize, DataTypes } from '../database.js';

const Provider = Sequelize.define(
  'provider',
  {
    provider_id: {
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
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'image',
        key: 'image_id',
      },
    },
    oauth_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByProviderId(provider_id) {
  return Provider.findOne({
    where: { provider_id },
  });
}

async function create(
  id, //
  password,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  return Provider.create({
    id, //
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  }).then(data => this.getByProviderId(data.dataValues.provider_id));
}

async function update(
  provider_id, //
  id,
  password,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  return Provider.findByPk(provider_id).then(provider => {
    provider.id = id;
    provider.password = password;
    provider.nickname = nickname;
    provider.image_id = image_id;
    provider.oauth_token = oauth_token;
    provider.access_token = access_token;
    return provider
      .save()
      .then(data => this.getByProviderId(data.dataValues.provider_id));
  });
}

async function remove(provider_id) {
  return Provider.findByPk(provider_id).then(provider => provider.destroy());
}

export default {
  getByProviderId,
  create,
  update,
  remove,
};
