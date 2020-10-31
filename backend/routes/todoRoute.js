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
