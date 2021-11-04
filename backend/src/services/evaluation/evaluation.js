import { EvaluationModel } from '../../models/index.js';
import ApiError from '../../modules/error.js';
import { PiscineService, SubjectService } from '../index.js';

/* Evaluation (PK) */

async function getByEvaluationId(evaluation_id) {
  const evaluation = await EvaluationModel.getByEvaluationId(evaluation_id);

  if (!evaluation)
    throw new ApiError(404, `Evaluation not found: ${evaluation_id}`);

  return evaluation;
}

async function create(
  evaluatee_id, //
  subject_id,
) {
  const is_done = 0;
  const score = 0;

  const subject = await SubjectService.getBySubjectId(subject_id);
  const users = await PiscineService.getUsers(subject.piscine_id);

  if (!users || users.length < 2)
    throw new ApiError(404, `Evaluator not found`);

  const evaluator = users[Math.floor(Math.random() * users.length)];
  const evaluator_id = evaluator.user_id;

  const evaluation = await EvaluationModel.create(
    evaluator_id, //
    evaluatee_id,
    subject_id,
    is_done,
    score,
  );

  return evaluation;
}

async function update(
  evaluation_id, //
  evaluator_id,
  evaluatee_id,
  subject_id,
  is_done,
  score,
) {
  await getByEvaluationId(evaluation_id);

  const updated = await EvaluationModel.update(
    evaluation_id, //
    evaluator_id,
    evaluatee_id,
    subject_id,
    is_done,
    score,
  );

  return updated;
}

async function removeByEvaluationId(evaluation_id) {
  await getByEvaluationId(evaluation_id);

  await EvaluationModel.remove(evaluation_id);
}

/* Evaluator (upper FK) */

async function getByEvaluatorId(evaluator_id) {
  const evaluations = await EvaluationModel.getByEvaluatorId(evaluator_id);

  return evaluations;
}

async function removeByEvaluatorId(evaluator_id) {
  const evaluations = await EvaluationModel.getByEvaluatorId(evaluator_id);

  if (evaluations)
    evaluations.forEach(evaluation =>
      removeByEvaluationId(evaluation.evaluation_id),
    );
}

/* Evaluetee (upper FK) */

async function getByEvaluateeId(evalutee_id) {
  const evaluations = await EvaluationModel.getByEvaluateeId(evalutee_id);

  return evaluations;
}

async function removeByEvaluateeId(evalutee_id) {
  const evaluations = await EvaluationModel.getByEvaluateeId(evalutee_id);

  if (evaluations)
    evaluations.forEach(evaluation =>
      removeByEvaluationId(evaluation.evaluation_id),
    );
}

/* Subject (upper FK) */

async function getBySubjectId(subject_id) {
  const evaluations = await EvaluationModel.getBySubjectId(subject_id);

  return evaluations;
}

async function removeBySubjectId(subject_id) {
  const evaluations = await EvaluationModel.getBySubjectId(subject_id);

  if (evaluations)
    evaluations.forEach(evaluation =>
      removeByEvaluationId(evaluation.evaluation_id),
    );
}

export default {
  getByEvaluationId,
  create,
  update,
  removeByEvaluationId,
  getByEvaluatorId,
  removeByEvaluatorId,
  getByEvaluateeId,
  removeByEvaluateeId,
  getBySubjectId,
  removeBySubjectId,
};
