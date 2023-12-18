import { Hello } from '../controllers/HelloController';
import { Router } from 'express';
import { emailValidate } from '../middlewares/emailValidate.ts';
import { signin, signup } from '../controllers/AuthController.ts';
import { getUsers } from '../controllers/UserController.ts';
import { passwordValidate } from '../middlewares/passwordValidate.ts';

const router = Router();

router.get('/api/v1/ping', Hello);

router.post('/api/v1/signup', emailValidate, passwordValidate, signup);
router.post('/api/v1/signin', emailValidate, signin);
router.get('/api/v1/users', getUsers);

export default router;
