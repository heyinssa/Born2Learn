import express from 'express';
import 'express-async-errors';

import { UserController } from '../../controllers/index.js';

const router = express.Router();

/* User (PK) */

router.get('/:user', UserController.get);
router.post('/', UserController.create);
router.put('/:user', UserController.update);
router.delete('/:user', UserController.remove);

/* Piscine (Equal FK) */

router.get('/:user/piscines', UserController.getPiscines);
router.post('/:user/piscines/:piscine', UserController.joinPiscine);
router.delete('/:user/piscines/:piscine', UserController.leavePiscine);

/* Evaluation (lower FK) */

router.get(
  '/:user/evaluation/by/evaluator',
  UserController.getEvaluationsByEvaluator,
);
router.get(
  '/:user/evaluation/by/evaluatee',
  UserController.getEvaluationsByEvaluatee,
);

/* Subject (Equal FK) */

router.get('/:user/subjects', UserController.getPiscines);
router.post('/:user/subjects/:subject', UserController.joinPiscine);
router.delete('/:user/subjects/:subject', UserController.leavePiscine);

export default router;
