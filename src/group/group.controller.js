const Group = require("./group.model");

const findMany = async (req, res) => {
  try {
    const data = await Group.find().lean().exec();
    res.status(200).json({ results: data });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Group.findOneAndUpdate({ _id: id }, req.body, {
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
    const data = await Group.findOneAndDelete(
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

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Group.find({ _id: id }).lean().exec();
    if (!data) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ results: [data] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const createOne = async (req, res) => {
  try {
    const newGroup = req.body;
    const data = await Group.create(newGroup);
    res.status(200).send({ results: [data] });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: "Creation failed" });
  }
};

module.exports = {
  createOne,
  findMany,
  findOne,
  updateOne,
  deleteOne,
};
