import express from 'express';
import registerUser from '../controller/registerUser.js';
import checkEmail from '../controller/checkEmail.js';
import checkPassword from '../controller/checkPassword.js';

const router = express.Router();

//create user api
router.post('/register', registerUser);

//check user email
router.post('/email', checkEmail);

//check user password
router.post('/password', checkPassword);
export default router;
