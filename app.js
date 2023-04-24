const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const taskroutes = require("./taskroutes/taskroutes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(taskroutes);
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/TaskApi")
  .then(() => console.log(`connected to db`));
app.listen(port, () => console.log(`server is running at port ${port}`));
