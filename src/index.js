const express = require("express");
const cors = require("cors");
const db = require("./db");
const { PORT } = require("./config");
const morgan = require("morgan");

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const groupRouter = require("./group/group.router");

app.use("/group", groupRouter);

const startServer = async () => {
  await db.connect();
  app.listen(PORT, () => {
    console.log(`Forums API listening on :${PORT}`);
  });
};

startServer();
