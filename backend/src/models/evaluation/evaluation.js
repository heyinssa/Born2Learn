import { Sequelize, DataTypes } from '../database.js';
import { UserService, SubjectService } from '../../services/index.js'; //temp

const Evaluation = Sequelize.define(
  'evaluation',
  {
    evaluation_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    evaluator_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    evaluatee_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    subject_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'subject',
        key: 'subject_id',
      },
    },
    is_done: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    evaluator_feedback: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    evaluatee_feedback: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function __temp__convert(evaluation) {
  if (!evaluation) return evaluation;

  evaluation.evaluatee = await UserService.getByUserId(evaluation.evaluatee_id);
  evaluation.evaluator = await UserService.getByUserId(evaluation.evaluator_id);
  evaluation.subject = await SubjectService.getBySubjectId(
    evaluation.subject_id,
  );

  delete evaluation.evaluatee_id;
  delete evaluation.evaluator_id;
  delete evaluation.subject_id;

  return evaluation;
}

async function getByEvaluationId(evaluation_id) {
  const evaluation = await Evaluation.findOne({
    where: { evaluation_id },
  }).then(data => {
    if (data) return data.get({ plain: true });
  });

  return await __temp__convert(evaluation);
}

async function getByEvaluatorId(evaluator_id) {
  const evaluations = await Evaluation.findAll({
    where: { evaluator_id },
  });

  const ret = await Promise.all(
    evaluations.map(evaluation => {
      return __temp__convert(evaluation.get({ plain: true }));
    }),
  );

  return ret;
}

async function getByEvaluateeId(evaluatee_id) {
  const evaluations = await Evaluation.findAll({
    where: { evaluatee_id },
  });

  const ret = await Promise.all(
    evaluations.map(evaluation => {
      return __temp__convert(evaluation.get({ plain: true }));
    }),
  );

  return ret;
}

async function getBySubjectId(subject_id) {
  const evaluations = Evaluation.findAll({
    where: { subject_id },
  }).then(data => data.get({ plain: true }));

  const ret = await Promise.all(
    evaluations.map(evaluation => {
      return __temp__convert(evaluation);
    }),
  );

  return ret;
}

async function create(
  evaluator_id, //
  evaluatee_id,
  subject_id,
  is_done,
  evaluator_feedback,
  evaluatee_feedback,
  score,
) {
  return Evaluation.create({
    evaluator_id, //
    evaluatee_id,
    subject_id,
    is_done,
    evaluator_feedback,
    evaluatee_feedback,
    score,
  }).then(data => this.getByEvaluationId(data.dataValues.evaluation_id));
}

async function update(
  evaluation_id, //
  evaluator_id,
  evaluatee_id,
  subject_id,
  is_done,
  evaluator_feedback,
  evaluatee_feedback,
  score,
) {
  return Evaluation.findByPk(evaluation_id).then(evaluation => {
    evaluation.evaluator_id = evaluator_id;
    evaluation.evaluatee_id = evaluatee_id;
    evaluation.subject_id = subject_id;
    evaluation.is_done = is_done;
    evaluation.evaluator_feedback = evaluator_feedback;
    evaluation.evaluatee_feedback = evaluatee_feedback;
    evaluation.score = score;
    return evaluation
      .save()
      .then(data => this.getByEvaluationId(data.dataValues.evaluation_id));
  });
}

async function remove(evaluation_id) {
  return Evaluation.findByPk(evaluation_id).ten(evaluation =>
    evaluation.destroy(),
  );
}

export default {
  getByEvaluationId,
  getByEvaluatorId,
  getByEvaluateeId,
  getBySubjectId,
  create,
  update,
  remove,
};
