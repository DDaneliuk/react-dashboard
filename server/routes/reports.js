import express from 'express';
import { getReport, getReports } from '../controllers/reports.js'

const router = express.Router();

router.get("/", getReport);

router.get("/dashboard", getReports);

export default router;
