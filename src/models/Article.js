import { Schema, model } from "mongoose";

const articleSchem = Schema({
  title: {
    type: String,
    required: [true, 'Artile title is required'],
    trim: true,
    index: true,
  },
  body: {
    type: String,
    required: [true, 'Artile body is required'],
    trim: true
  },
  cover: {
    type: String,
  },
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
})


const Article = model('Article', articleSchem)

export default Article