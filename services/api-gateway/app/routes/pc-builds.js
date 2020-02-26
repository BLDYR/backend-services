import express from 'express';
import { pcBuildsController } from '@controllers';

const router = express.Router();

router.get('/', pcBuildsController.getMultiple);
router.get('/:id', pcBuildsController.get);

export default router;
