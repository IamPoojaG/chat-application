import express from 'express';
import registerUser from '../controller/registerUser.js';
import checkEmail from '../controller/checkEmail.js';

const router = express.Router();

//create user api
router.post('/register', registerUser);

//check user email
router.post('/email', checkEmail);

export default router;
