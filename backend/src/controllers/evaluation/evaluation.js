import { EvaluationService } from '../../services/index.js';

/* Evaluation (PK) */

async function get(req, res, next) {
  const evaluation_id = req.params.evaluation;

  const evaluation = await EvaluationService.getByEvaluationId(evaluation_id);

  res.status(200).json(evaluation);
}

async function create(req, res, next) {
  const {
    evaluator_id, //
    evaluatee_id,
    subject_id,
    is_done,
    score,
  } = req.body;

  const evaluation = await EvaluationService.create(
    evaluator_id, //
    evaluatee_id,
    subject_id,
    is_done,
    score,
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
    score,
  } = req.body;

  const evaluation = await EvaluationService.update(
    evaluation_id, //
    evaluator_id,
    evaluatee_id,
    subject_id,
    is_done,
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
