const Job = require('../models/Job');
const ApiError = require('../middlewares/apiError');

const jobService = {
    async getAllJobs() {
        const jobs = await Job.find({ isActive: true })
        return jobs
    },

    async getJobById(jobId) {
        const job = await Job.findById(jobId)
        if (!job) {
            throw ApiError.notFound('Job not found')
        }
        return job
    },

    async createJob(jobData) {
        if (!jobData.title) {
            throw ApiError.badRequest('Job Title is required')
        }
        if (!jobData.company) {
            throw ApiError.badRequest('Company is required')
        }
        if (!jobData.location) {
            throw ApiError.badRequest('Location is required')
        }
        if (!jobData.description) {
            throw ApiError.badRequest('Description is required')
        }
        if (!jobData.type) {
            throw ApiError.badRequest('Type is required')
        }
        
        const job = await Job.create(jobData)
        return job
    }
};

module.exports = jobService;
