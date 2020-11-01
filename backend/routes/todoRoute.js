const express = require("express");
const TodoModel = require("../models/todoModel");
const {
  check,
  validationResult,
} = require("express-validator");

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await TodoModel.find({});

  res.send(todos);
});

router.post(
  "/",
  [
    check("todoNotes", "todoNotes is required")
      .not()
      .isEmpty(),
    check("deadline", "deadline is required")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ msg: errors.array() });

    const { todoNotes, deadline } = req.body;

    try {
      const newTodo = new TodoModel({
        todoNotes,
        deadline,
      });

      const savedTodo = await newTodo.save();

      res.send(savedTodo);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

router.put("/:id", async (req, res) => {
  // find todo object, delete it and replace it with new
  try {
    let todo = await TodoModel.findById(req.params.id);

    if (!todo)
      return res
        .status(404)
        .json({ error: "todo not found" });

    let updatedTodo = {};

    if (todo.todoNotes) {
      updatedTodo.todoNotes = todo.todoNotes;
    }
    if (todo.deadline) {
      updatedTodo.todoType = todo.deadline;
    }
    if (todo._id) {
      updatedTodo._id = todo._id;
    }

    updatedTodo.isCompleted = true;

    todo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      { $set: updatedTodo },
      { new: true }
    );

    return res.send(updatedTodo);
  } catch (error) {
    res.status(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let todo = await TodoModel.findById(req.params.id);

    if (!todo) return res.send("contact not found");
    await TodoModel.findByIdAndRemove(req.params.id);

    res.send(
      `todo with id ${req.params.id} has been removed successfully`
    );
  } catch (error) {}
});

module.exports = router;
