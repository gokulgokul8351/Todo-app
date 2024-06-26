import mongoose, { Schema, model } from 'mongoose'

// write your schema
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
})

// create your model

const todo = model('Todo', todoSchema)

export default todo
