const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  todoNotes: {
    type: String,
    required: true,
  },

  deadline: {
    type: String,
    required: true,
  },

  isCompleted: {
    type: Boolean,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("todos", TodoSchema);
