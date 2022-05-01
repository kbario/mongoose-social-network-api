const router = require("express").Router();
const { Thought, User } = require("../../models");

router
  .route("/")
  .get((req, res) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  })
  .post((req, res) => {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  });

router
  .route("/:id")
  .get((req, res) => {
    User.findOne({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  })
  .put((req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  })
  .delete((req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "User and Thoughts deleted!" }))
      .catch((err) => res.status(500).json(err));
  });

module.exports = router;
