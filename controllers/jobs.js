const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({ _id: jobId, createdBy: userId });
  if (!job) {
    throw new NotFoundError(`No Job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};
const createJob = async (req, res) => {
  console.log(req.user);
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
