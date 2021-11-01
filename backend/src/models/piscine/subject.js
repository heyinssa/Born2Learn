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
      allowNull: true,
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

async function create(
  id, //
  password,
) {
  return Subject.create({
    id,
    password,
  }).then(data => this.getBySubjectId(data.dataValues.subject_id));
}

async function update(
  subject_id, //
  id,
  password,
) {
  return Subject.findByPk(subject_id).then(subject => {
    subject.id = id;
    subject.password = password;
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
  create,
  update,
  remove,
};
