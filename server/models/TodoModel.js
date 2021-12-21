const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  todo: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model("Todo", todoSchema);