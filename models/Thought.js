const { Schema, model } = require("mongoose");
const {}

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("getCreatedAt").get(function () {
  return this.createdAt.format("%d %m %y");
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
