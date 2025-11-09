import Job from "../model/Job_model.js";



import mongoose from "mongoose";

export const postJob = async (req, res) => {
  try {
    const {
      title, description, requirements, salary, location, jobType, experienceLevel, position, company
    } = req.body;

    const userId = req.id;

    if (
      !title || !description || !requirements || !salary || !location ||
      !jobType || !experienceLevel || !position || !company
    ) {
      return res.status(400).json({
        success: false,
        message: "Something is missing."
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary,
      experienceLevel,
      location,
      jobType,
      position,
      company: new mongoose.Types.ObjectId(company),      // ✅ FIX
      created_by: new mongoose.Types.ObjectId(userId)     // ✅ FIX
    });

    return res.status(201).json({
      success: true,
      message: "Job posted successfully.",
      job
    });

  } catch (error) {
    console.log("Post Job Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};



export const getalljobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } }
      ]
    };

    const jobs = await Job.find(query).populate({
        path:"company"
    }).sort({createdAt:-1});

    if (jobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found."
      });
    }

    return res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};


export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found."
      });
    }

    return res.status(200).json({
      success: true,
      job
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;

    const jobs = await Job.find({ created_by: adminId });

    if (jobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found."
      });
    }

    return res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
