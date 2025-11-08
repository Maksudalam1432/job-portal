
import Company from "../model/company_model.js";

// CREATE Company
export const registerCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: "Company name is required" });
    }

    const existing = await Company.findOne({ name });
    if (existing) {
      return res.status(400).json({ success: false, message: "Company already registered" });
    }

    const company = await Company.create({
      name,
      description,
      website,
      location,
      userId: req.id
    });

    res.status(201).json({ success: true, message: "Company registered ✅", company });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all companies of logged user
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({ userId: req.id });
    res.status(200).json({ success: true, companies });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ success: false, message: "Company not found" });
    }
    res.status(200).json({ success: true, company });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE company
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!company) {
      return res.status(404).json({ success: false, message: "Company not found" });
    }

    res.status(200).json({ success: true, message: "Company updated ✅", company });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

