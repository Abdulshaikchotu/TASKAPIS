const mongoose = require("mongoose");
const taskschema = new mongoose.Schema({
  title: { type: String, required: true },
  is_completed: { type: Boolean, required: true },
});

const taskmodel = mongoose.model("taskdata", taskschema);
module.exports = taskmodel;
