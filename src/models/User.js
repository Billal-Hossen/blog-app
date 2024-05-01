import { Schema, model } from "mongoose";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'User name is required'],
    lowercase: true,
    trim: true,
    index: true
  },
  fullname: {
    type: String,
    required: [true, 'Uaer full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'User email is required'],
    lowercase: true,
    unique: true,
    trim: true,
    index: true
  },
  password: {
    type: String,
    required: [true, 'Paasord is required'],
  },
  avatar: {
    type: String
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  refreshToken: {
    type: String
  }

}, { timestamps: true })

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcryptjs.hash(this.password, 10)
  next()
})

userSchema.methods.isCorrectPasswor = async function (password) {
  return await bcryptjs.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      role: this.tole,
      fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SCERECT,
    {
      algorithm: 'HS256',
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRECT,
    {
      algorithm: 'HS256',
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

const User = model("User", userSchema)

export default User