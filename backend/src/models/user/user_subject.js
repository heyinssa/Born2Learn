import { Sequelize, DataTypes } from '../database.js';

const UserSubject = Sequelize.define(
  'user_subject',
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
    subject_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'subject',
        key: 'subject_id',
      },
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    repository: {
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
  return UserSubject.find({
    where: { user_id },
  });
}

async function getBySubjectId(subject_id) {
  return UserSubject.find({
    where: { subject_id },
  });
}

async function getByUserSubjectId(user_id, subject_id) {
  return UserSubject.findOne({
    where: { user_id, subject_id },
  });
}

async function create(
  user_id, //
  subject_id,
  state,
  score,
  repository,
) {
  return UserSubject.create({
    user_id,
    subject_id,
    state,
    score,
    repository,
  }).then(data =>
    getByUserSubjectId(data.dataValues.user_id, data.dataValues.subject_id),
  );
}

async function remove(user_id, subject_id) {
  return getByUserSubjectId(user_id, subject_id).then(user_subject =>
    user_subject.destroy(),
  );
}

async function removeByUserId(user_id) {
  return UserSubject.destroy({
    user_id,
  });
}

async function removeBySubjectId(subject_id) {
  return UserSubject.destroy({
    subject_id,
  });
}
export default {
  getByUserId,
  getBySubjectId,
  create,
  remove,
  removeByUserId,
  removeBySubjectId,
};
