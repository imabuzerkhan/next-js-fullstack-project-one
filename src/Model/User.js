

import { Schema } from "mongoose";

const MessageSchemas = new Schema({
  content:{
    type: String,
    required:true,

  },
  createdAt:{
    type:Date,
    required: true,
    default: Date.now
  }

})

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  verifyCode: {
    type: String,
    required: [true, 'Verify Code is required'],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, 'Verify Code Expiry is required'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchemas],
})
const UserModel =
  (mongoose.models.User ) ||
  mongoose.model('User', userSchema);

export default UserModel;

