import express from 'express'

import { getSettings, getInstitute, createCampus } from '../controllers/settings.js'
import { createUsers, getEducator } from '../controllers/users.js'

const router = express.Router();

router.get('/', getSettings);
router.get('/institute', getInstitute);
router.post('/institute/campus', createCampus);
router.get('/educator', getEducator);
router.post('/educator/new', createUsers);

export default router;