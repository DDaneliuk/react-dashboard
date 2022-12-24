import express from 'express';
import { getRequests } from '../controllers/requests.js'

const router = express.Router();

router.get("/", getRequests);

export default router;
