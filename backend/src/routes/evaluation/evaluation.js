import express from 'express';
import 'express-async-errors';

import { EvaluationController } from '../../controllers/index.js';

const router = express.Router();

/* Evaluation (PK) */

router.get('/:evaluation', EvaluationController.get);
router.post('/', EvaluationController.create);
router.put('/:evaluation', EvaluationController.update);
router.delete('/:evaluation', EvaluationController.remove);

export default router;
