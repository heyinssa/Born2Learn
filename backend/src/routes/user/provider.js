import express from 'express';
import 'express-async-errors';

import { uploadImage } from '../../middleware/upload/imageHandle.js';
import { ProviderController } from '../../controllers/index.js';

const router = express.Router();

/* Provider (PK) */

router.get('/:provider', ProviderController.get);
router.post('/', ...uploadImage('image'), ProviderController.create);
router.put('/:provider', ProviderController.update);
router.delete('/:provider', ProviderController.remove);

/* Team (Equal FK) */

router.get('/:provider/teams', ProviderController.getTeams);
router.post('/:provider/teams/:team', ProviderController.joinTeam);
router.delete('/:provider/teams/:team', ProviderController.leaveTeam);

export default router;
