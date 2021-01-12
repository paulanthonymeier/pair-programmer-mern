import express from 'express'

import { getSettings } from '../controllers/settings.js'

const router = express.Router();

router.get('/', getSettings);

export default router;