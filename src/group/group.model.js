const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const groupSchema = new Schema(
  {
    course: {
      type: String,
      required: true,
      maxlength: 50,
    },
    class: {
      type: String,
      required: true,
      maxlenght: 1,
    },
    tutor: {
      type: String,
      required: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

const Group = mongoose.model("groups", groupSchema);

module.exports = Group;
