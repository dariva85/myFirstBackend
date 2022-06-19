const { Schema } = require("mongoose");

const mongoose = require("mongoose");
const { Schem } = mongoose;

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

const Group = mongoose.model("group", groupSchema);

module.exports = Group;
