import Application from "../model/Application_model.js";
import Job from "../model/Job_model.js";
  

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id.trim();

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Job id is required."
      });
    }

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found."
      });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job."
      });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      success: true,
      message: "Job applied successfully.",
    });

  } catch (error) {
    console.log("Apply Job Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;

    const applications = await Application.find({ applicant: userId })
      .populate({
        path: "job",
        populate: { path: "company" }
      })
      .sort({ createdAt: -1 });

    if (!applications || applications.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Applications"
      });
    }

    return res.status(200).json({
      success: true,
      applications
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
export const getJobApplications = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId)
      .populate({
        path: "applications",
        populate: {
          path: "applicant",   
          select: "name email" 
        }
      });

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
    console.log("Get Job Applications Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};


export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required."
      });
    }

    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found."
      });
    }

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      success: true,
      message: "Status updated successfully."
    });

  } catch (error) {
    console.log("Update Status Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};