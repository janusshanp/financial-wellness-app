const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema(
  {
    name: { type: String, required: true },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 7,
      required: true,
    },
    quizzes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
    streak: {
      type: Number,
    },
    lastLoggedIn: {
        type: Date,
      },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

let Child = mongoose.model("Child", childSchema);

module.exports = Child;
