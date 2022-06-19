const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    age: {
      type: Number,
      required: true,
      maxlenght: 1,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  },
  { timestamps: true }
);

const student = mongoose.model("students", groupSchema);

module.exports = student;
