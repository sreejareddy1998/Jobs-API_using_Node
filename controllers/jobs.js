const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};
const getJob = async (req, res) => {
  res.send("get job");
};
const createJob = async (req, res) => {
  res.send("Create Job");
};
const updateJob = async (req, res) => {
  res.send("Update Job");
};
const deleteJob = async (req, res) => {
  res.send("delete Job");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
