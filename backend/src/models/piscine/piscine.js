import { Sequelize, DataTypes } from '../database.js';

const Piscine = Sequelize.define(
  'piscine',
  {
    piscine_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    readme_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByPiscineId(piscine_id) {
  return Piscine.findOne({
    where: { piscine_id },
  });
}

async function create(
  name, //
  github_link,
  readme_link,
) {
  return Piscine.create({
    name, //
    github_link,
    readme_link,
  }).then(data => this.getByPiscineId(data.dataValues.piscine_id));
}

async function update(
  piscine_id, //
  name,
  github_link,
  readme_link,
) {
  return Piscine.findByPk(piscine_id).then(piscine => {
    piscine.name = name;
    piscine.github_link = github_link;
    piscine.readme_link = readme_link;
    return piscine
      .save()
      .then(data => this.getByPiscineId(data.dataValues.piscine_id));
  });
}

async function remove(piscine_id) {
  return Piscine.findByPk(piscine_id).then(piscine => piscine.destroy());
}

export default {
  getByPiscineId,
  create,
  update,
  remove,
};
