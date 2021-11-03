import express from 'express';
import 'express-async-errors';

import { PiscineController } from '../../controllers/index.js';

const router = express.Router();

/* Piscine (PK) */

router.get('/', PiscineController.getAll);
router.get('/:piscine', PiscineController.get);
router.post('/', PiscineController.create);
router.put('/:piscine', PiscineController.update);
router.delete('/:piscine', PiscineController.remove);

/* Subject (lower FK) */

router.get('/:piscine/subjects', PiscineController.getSubjects);

/* User (Equal FK) */

router.get('/:piscine/users', PiscineController.getUsers);

export default router;
