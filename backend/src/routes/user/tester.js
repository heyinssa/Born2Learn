import express from 'express';
import 'express-async-errors';

import { uploadImage } from '../../middleware/upload/imageHandle.js';
import { TesterController } from '../../controllers/index.js';

const router = express.Router();

/* Tester (PK) */

router.get('/:tester', TesterController.get);
router.post('/', ...uploadImage('image'), TesterController.create);
router.put('/:tester', TesterController.update);
router.delete('/:tester', TesterController.remove);

/* Feedback (Lower FK) */

router.get('/:tester/feedbacks', TesterController.getFeedbacks);

export default router;
