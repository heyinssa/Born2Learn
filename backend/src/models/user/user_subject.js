import { Sequelize, DataTypes } from '../database.js';
import { SubjectService, UserService } from '../../services/index.js';

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

async function __temp__convert(user_subject) {
  if (!user_subject) return user_subject;

  user_subject.subject = await SubjectService.getBySubjectId(
    user_subject.subject_id,
  );
  user_subject.user = await UserService.getByUserId(user_subject.user_id);

  delete user_subject.subject_id;
  delete user_subject.user_id;

  return user_subject;
}

async function getByUserId(user_id) {
  const user_subjects = await UserSubject.findAll({
    where: { user_id },
  });

  const ret = await Promise.all(
    user_subjects.map(user_subject => {
      return __temp__convert(user_subject.get({ plain: true }));
    }),
  );

  return ret;
}

async function getBySubjectId(subject_id) {
  const user_subjects = await UserSubject.findAll({
    where: { subject_id },
  });

  const ret = await Promise.all(
    user_subjects.map(user_subject => {
      return __temp__convert(user_subject.get({ plain: true }));
    }),
  );

  return ret;
}

async function getByUserSubjectId(user_id, subject_id) {
  const user_subject = await UserSubject.findOne({
    where: { user_id, subject_id },
  }).then(data => {
    if (data) return data.get({ plain: true });
  });

  return await __temp__convert(user_subject);
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
  return UserSubject.destroy({
    where: {
      user_id,
      subject_id,
    },
  });
}

async function removeByUserId(user_id) {
  return UserSubject.destroy({
    where: { user_id },
  });
}

async function removeBySubjectId(subject_id) {
  return UserSubject.destroy({
    where: { subject_id },
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
