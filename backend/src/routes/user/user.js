import express from 'express';
import 'express-async-errors';

import { UserController } from '../../controllers/index.js';

const router = express.Router();

/* User (PK) */

router.get('/all', UserController.getAll);
router.get('/:user', UserController.get);
router.post('/login', UserController.login);
router.get('/register/valid/:id', UserController.getValidId);
router.post('/register', UserController.create);
router.put('/:user', UserController.update);
router.delete('/:user', UserController.remove);

/* Evaluation (lower FK) */

router.get('/:user/evaluations', UserController.getEvaluations);

/* Piscine (Equal FK) */

router.get('/:user/piscines', UserController.getPiscines);
router.post('/:user/piscines/:piscine', UserController.registerPiscine);
router.delete('/:user/piscines/:piscine', UserController.unregisterPiscine);

/* Subject (Equal FK) */

router.get('/:user/subjects', UserController.getSubjects);
router.post('/:user/subjects/:subject', UserController.registerSubject);
router.delete('/:user/subjects/:subject', UserController.unregisterSubject);

export default router;
