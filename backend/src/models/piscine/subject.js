import { Sequelize, DataTypes } from '../database.js';

const Subject = Sequelize.define(
  'subject',
  {
    subject_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    piscine_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'piscine',
        key: 'piscine_id',
      },
    },
    readme_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    default_repository: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getBySubjectId(subject_id) {
  return Subject.findOne({
    where: { subject_id },
  });
}

async function getByPiscineId(piscine_id) {
  return Subject.findAll({
    where: { piscine_id },
  });
}

async function create(
  piscine_id, //
  readme_link,
  default_repository,
) {
  return Subject.create({
    piscine_id, //
    readme_link,
    default_repository,
  }).then(data => this.getBySubjectId(data.dataValues.subject_id));
}

async function update(
  subject_id, //
  piscine_id,
  readme_link,
  default_repository,
) {
  return Subject.findByPk(subject_id).then(subject => {
    subject.piscine_id = piscine_id;
    subject.readme_link = readme_link;
    subject.default_repository = default_repository;
    return subject
      .save()
      .then(data => this.getBySubjectId(data.dataValues.subject_id));
  });
}

async function remove(subject_id) {
  return Subject.findByPk(subject_id).ten(subject => subject.destroy());
}

export default {
  getBySubjectId,
  getByPiscineId,
  create,
  update,
  remove,
};
