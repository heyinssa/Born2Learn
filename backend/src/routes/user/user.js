import express from 'express';
import 'express-async-errors';

import { UserController } from '../../controllers/index.js';

const router = express.Router();

/* User (PK) */

router.get('/:user', UserController.get);
router.post('/login', UserController.login);
router.post('/', UserController.create);
router.put('/:user', UserController.update);
router.delete('/:user', UserController.remove);

/* Evaluation (lower FK) */

router.get(
  '/:user/evaluation/by/evaluator',
  UserController.getEvaluationsByEvaluator,
);
router.get(
  '/:user/evaluation/by/evaluatee',
  UserController.getEvaluationsByEvaluatee,
);

/* Piscine (Equal FK) */

router.get('/:user/piscines', UserController.getPiscines);
router.post('/:user/piscines/:piscine', UserController.registerPiscine);
router.delete('/:user/piscines/:piscine', UserController.unregisterPiscine);

/* Subject (Equal FK) */

router.get('/:user/subjects', UserController.getSubjects);
router.post('/:user/subjects/:subject', UserController.registerSubject);
router.delete('/:user/subjects/:subject', UserController.unregisterSubject);

export default router;
