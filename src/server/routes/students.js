import express from 'express'

import { getStudents, createStudents } from '../controllers/students.js'

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudents);

export default router;