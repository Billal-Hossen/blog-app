import { Schema, model } from "mongoose";

const commentSchem = Schema({
  body: {
    type: String,
    required: [true, 'Comment body is required'],
    trim: true
  },
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  article: {
    type: Schema.ObjectId,
    ref: 'Article'
  },
  status: {
    type: String,
    enum: ['private', 'public'],
    default: 'public'
  }
})


const Comment = model('Comment', commentSchem)

export default Comment 