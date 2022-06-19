const Student = require("./student.model");
const { default: mongoose } = require("mongoose");
const Group = require("../group/group.model");

const findMany = async (req, res) => {
  try {
    const data = await Student.find().lean().exec();
    res.status(200).json({ results: data });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Student.find({ _id: id }).lean().exec();
    if (!data) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ results: [data] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const findByGroupId = async (req, res) => {
  const { GroupId } = req.params;
  try {
    const data = await Student.find({ group: GroupId }).lean().exec();
    if (!data) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ results: data });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const createOne = async (req, res) => {
  try {
    const newStudent = req.body;
    const groups = await Group.findById(newStudent.group).lean().exec();
    if (!groups) {
      return res.status(406).json({ error: "Group not found" });
    }
    const data = await Student.create(newStudent);
    res.status(200).send({ results: [data] });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: "Creation failed" });
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(req.body.group);
    const groups = await Group.findById(req.body.group).lean().exec();
    if (!groups) {
      return res.status(406).json({ error: "Group not found" });
    }
    const data = await Student.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!data) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ results: [data] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Student.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    );
    if (!data) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ results: [data] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

module.exports = {
  createOne,
  findMany,
  findOne,
  findByGroupId,
  updateOne,
  deleteOne,
};
