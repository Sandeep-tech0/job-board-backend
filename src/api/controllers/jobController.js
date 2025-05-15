const response = require("../middlewares/response");
const jobService = require("../services/jobService");
const ApiError = require("../middlewares/apiError");

const jobController = {
    // Get all jobs
    async getAllJobs(req, res) {
        try {
            const jobs = await jobService.getAllJobs();
            return response.success(res, "Jobs retrieved successfully", jobs);
        } catch (err) {
            if (err instanceof ApiError)
                return response.error(res, err);
            return response.error(res, ApiError.internal(err));
        }
    },

    // Get job by ID
    async getJobById(req, res) {
        try {
            const job = await jobService.getJobById(req.params.id);
            if (!job) {
                return response.error(res, "Job not found", 404);
            }
            return response.success(res, "Job retrieved successfully", job);
        } catch (err) {
            if (err instanceof ApiError)
                return response.error(res, err);
            return response.error(res, ApiError.internal(err));
        }
    },

    // Create new job
    async createJob(req, res) {
        try {
            const job = await jobService.createJob(req.body);
            return response.success(res, "Job created successfully", job);
        } catch (err) {
            if (err instanceof ApiError)
                return response.error(res, err);
            return response.error(res, ApiError.internal(err));
        }
    },

 
};

module.exports = jobController; 