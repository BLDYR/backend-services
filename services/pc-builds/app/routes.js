import express from 'express';
import {
  getMultiple,
  get,
} from './controllers';

const router = express.Router();

// get, post, put, patch, update, delete
router.get('/', getMultiple);
router.get('/:id', get);

export default router;
