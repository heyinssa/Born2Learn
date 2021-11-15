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

// TODO: 이전에 잡힌 평가자는 제외로 잡기
async function create(
  evaluatee_id, //
  subject_id,
) {
  const is_done = 0;
  const evaluator_feedback = '';
  const evaluatee_feedback = '';
  const score = 0;

  const subject = await SubjectService.getBySubjectId(subject_id);
  const users = await PiscineService.getUsers(subject.piscine.piscine_id);

  if (!users || users.length <= subject.evaluation_num)
    throw new ApiError(404, `Evaluator not found`);

  let user_pool = users.filter(user => user.user_id != evaluatee_id);
  const evaluations = [];
  for (let i = 0; i < subject.evaluation_num; i++) {
    const evaluator = user_pool[Math.floor(Math.random() * user_pool.length)];
    const evaluator_id = evaluator.user_id;

    user_pool = user_pool.filter(user => user.user_id != evaluator_id);
    const evaluation = await EvaluationModel.create(
      evaluator_id, //
      evaluatee_id,
      subject_id,
      is_done,
      evaluator_feedback,
      evaluatee_feedback,
      score,
    );
    evaluations.push(evaluation);
  }

  return evaluations;
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
  await getByEvaluationId(evaluation_id);

  const updated = await EvaluationModel.update(
    evaluation_id, //
    evaluator_id,
    evaluatee_id,
    subject_id,
    is_done,
    evaluator_feedback,
    evaluatee_feedback,
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
