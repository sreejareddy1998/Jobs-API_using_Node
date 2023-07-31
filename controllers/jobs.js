const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};
const getJob = async (req, res) => {
  res.send("get job");
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  // console.log(`req.body.createdBy ${req.body.createdBy}`);
  // console.log(`req.user.userId ${req.user.userId}`);
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const updateJob = async (req, res) => {
  res.send("Update Job");
};
const deleteJob = async (req, res) => {
  res.send("delete Job");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
