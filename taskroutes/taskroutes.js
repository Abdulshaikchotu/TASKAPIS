const express = require("express");
const router = express.Router();
const taskmodel = require("../taskmodel/taskmodel");

//post the task
router.post("/POST/v1/tasks", async (req, res) => {
  try {
    let posttask = await taskmodel.create(req.body);
    res.json({
      statuscode: 201,
      Tasks: posttask,
    });
  } catch (e) {
    res.json({
      status: "fail",
      msg: e.message,
    });
  }
});
//get all the task
router.get("/GET/v1/tasks", async (req, res) => {
  try {
    let gettask = await taskmodel.find();
    res.json({
      statuscode: 200,
      Tasks: gettask,
    });
  } catch (e) {
    res.json({
      status: "fail",
      msg: e.message,
    });
  }
});

//get specific task using id
router.get("/GET/v1/tasks/:id", async (req, res) => {
  try {
    let gettask = await taskmodel.findById({ _id: req.params.id });
    res.json({
      statuscode: 200,
      Tasks: gettask,
    });
  } catch (e) {
    res.json({
      statuscode: 404,
      error: "There is no task with that id",
    });
  }
});

//delete specific task using id
router.delete("/DELETE/v1/tasks/:id", async (req, res) => {
  try {
    let gettaskdeleted = await taskmodel.deleteOne({ _id: req.params.id });
    res.json({
      statuscode: 204,
      Tasks: gettaskdeleted,
    });
  } catch (e) {
    res.json({
      statuscode: 204,
      error: "There is no task with that id",
    });
  }
});

//delete all tasks
router.delete("/DELETE/BULK/v1/tasks", async (req, res) => {
  try {
    let gettaskdeleted = await taskmodel.deleteMany();
    res.json({
      statuscode: 204,
      Tasks: gettaskdeleted,
    });
  } catch (e) {
    res.json({
      statuscode: 204,
    });
  }
});
//put a specific task using id
router.put("/PUT/v1/tasks/:id", async (req, res) => {
  try {
    let updatetask = await taskmodel.updateOne(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({
      statuscode: 204,
      Tasks: updatetask,
    });
  } catch (e) {
    res.json({
      statuscode: 404,
      error: "There is no task with that id",
    });
  }
});

module.exports = router;
