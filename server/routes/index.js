import express from 'express';
import registerUser from '../controller/registerUser.js';
import checkEmail from '../controller/checkEmail.js';
import checkPassword from '../controller/checkPassword.js';
import userDetails from '../controller/userDetails.js';

const router = express.Router();

//create user api
router.post('/register', registerUser);

//check user email
router.post('/email', checkEmail);

//check user password
router.post('/password', checkPassword);

//login user details
router.get('/user-details', userDetails);

export default router;
