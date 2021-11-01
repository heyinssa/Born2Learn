import express from 'express';
import 'express-async-errors';

import { SubjectController } from '../../controllers/index.js';

const router = express.Router();

/* Subject (PK) */

router.get('/:subject', SubjectController.get);
router.post('/', SubjectController.create);
router.put('/:subject', SubjectController.update);
router.delete('/:subject', SubjectController.remove);

/* User (Equal FK) */

router.get('/:subject/users', SubjectController.getUsers);

export default router;
