import { Hello } from '../controller/HelloController';
import { Router } from 'express';

const router = Router();

router.get('/api/v1/', Hello);

export default router;
