import express from 'express'

import { getProfile } from '../controllers/userProfile.js'

const router = express.Router();

router.get('/', getProfile);

export default router;