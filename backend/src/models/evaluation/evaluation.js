import { Sequelize, DataTypes } from '../database.js';

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

async function getByEvaluationId(evaluation_id) {
  return Evaluation.findOne({
    where: { evaluation_id },
  });
}

async function getByEvaluatorId(evaluator_id) {
  return Evaluation.findAll({
    where: { evaluator_id },
  });
}

async function getByEvaluateeId(evaluatee_id) {
  return Evaluation.findAll({
    where: { evaluatee_id },
  });
}

async function getBySubjectId(subject_id) {
  return Evaluation.findAll({
    where: { subject_id },
  });
}

async function create(
  evaluator_id, //
  evaluatee_id,
  subject_id,
  is_done,
  score,
) {
  return Evaluation.create({
    evaluator_id, //
    evaluatee_id,
    subject_id,
    is_done,
    score,
  }).then(data => this.getByEvaluationId(data.dataValues.evaluation_id));
}

async function update(
  evaluation_id, //
  evaluator_id,
  evaluatee_id,
  subject_id,
  is_done,
  score,
) {
  return Evaluation.findByPk(evaluation_id).then(evaluation => {
    evaluation.evaluator_id = evaluator_id;
    evaluation.evaluatee_id = evaluatee_id;
    evaluation.subject_id = subject_id;
    evaluation.is_done = is_done;
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
