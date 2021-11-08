import { EvaluationService } from '../../services/index.js';

/* Evaluation (PK) */

async function get(req, res, next) {
  const evaluation_id = req.params.evaluation;

  const evaluation = await EvaluationService.getByEvaluationId(evaluation_id);

  res.status(200).json(evaluation);
}

async function create(req, res, next) {
  const {
    evaluatee_id, //
    subject_id,
  } = req.body.data;

  const evaluation = await EvaluationService.create(
    evaluatee_id, //
    subject_id,
  );

  res.status(200).json(evaluation);
}

async function update(req, res, next) {
  const evaluation_id = req.params.evaluation;
  const {
    evaluator_id, //
    evaluatee_id,
    subject_id,
    is_done,
    evaluator_feedback,
    evaluatee_feedback,
    score,
  } = req.body.data;

  const evaluation = await EvaluationService.update(
    evaluation_id, //
    evaluator_id,
    evaluatee_id,
    subject_id,
    is_done,
    evaluator_feedback,
    evaluatee_feedback,
    score,
  );

  res.status(200).json(evaluation);
}

async function remove(req, res, next) {
  const evaluation_id = req.params.evaluation;

  await EvaluationService.removeByEvaluationId(evaluation_id);

  res.sendStatus(200);
}

export default {
  get,
  create,
  update,
  remove,
};
