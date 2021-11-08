import { Sequelize, DataTypes } from '../database.js';
import { PiscineService } from '../../services/index.js'; //temp

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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evaluation_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evaluation_link: {
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

async function __temp__convert(subject) {
  if (!subject) return subject;

  subject.piscine = await PiscineService.getByPiscineId(subject.piscine_id);

  delete subject.piscine_id;

  return subject;
}

async function getBySubjectId(subject_id) {
  const subject = await Subject.findOne({
    where: { subject_id },
  }).then(data => {
    if (data) return data.get({ plain: true });
  });

  return await __temp__convert(subject);
}

async function getByPiscineId(piscine_id) {
  const subjects = await Subject.findAll({
    where: { piscine_id },
  });

  const ret = await Promise.all(
    subjects.map(subject => {
      return __temp__convert(subject.get({ plain: true }));
    }),
  );

  return ret;
}

async function create(
  piscine_id, //
  name,
  evaluation_num,
  subject_link,
  evaluation_link,
  default_repository,
) {
  return Subject.create({
    piscine_id, //
    name,
    evaluation_num,
    subject_link,
    evaluation_link,
    default_repository,
  }).then(data => this.getBySubjectId(data.dataValues.subject_id));
}

async function update(
  subject_id, //
  piscine_id,
  name,
  evaluation_num,
  subject_link,
  evaluation_link,
  default_repository,
) {
  return Subject.findByPk(subject_id).then(subject => {
    if (piscine_id) subject.piscine_id = piscine_id;
    if (name) subject.name = name;
    if (evaluation_num) subject.evaluation_num = evaluation_num;
    if (subject_link) subject.subject_link = subject_link;
    if (evaluation_link) subject.evaluation_link = evaluation_link;
    if (default_repository) subject.default_repository = default_repository;
    return subject
      .save()
      .then(data => this.getBySubjectId(data.dataValues.subject_id));
  });
}

async function remove(subject_id) {
  return Subject.findByPk(subject_id).then(subject => subject.destroy());
}

export default {
  getBySubjectId,
  getByPiscineId,
  create,
  update,
  remove,
};
