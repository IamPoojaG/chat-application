import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'provide name'],
    },
    email: {
      type: String,
      required: [true, 'provide email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'provide password'],
    },
    profile_pic: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('chatUser', userSchema);

export default UserModel;
