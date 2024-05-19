import UserModel from '../models/userModel.js';
import bcryptjs from 'bcryptjs';

async function registerUser(request, response) {
  try {
    const { name, email, password, profile_pic } = request.body;
    const checkEmail = await UserModel.findOne({ email }); //{ name,email}  // null

    if (checkEmail) {
      return response.status(400).json({
        message: 'Already user exits',
        error: true,
      });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      profile_pic,
      password: hashpassword,
    };
    const user = new UserModel(payload);
    const userSave = await user.save();
    console.log(userSave);
    return response.status(201).json({
      message: 'User created successfully',
      data: userSave,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

export default registerUser;
