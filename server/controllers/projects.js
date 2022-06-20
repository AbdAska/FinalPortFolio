const Projects = require('../models/projects')

const createProject = async (req, res) => {
    try {
        const projectData = await Projects.create(req.body)
        res.status(200).json({ status: 'ok', projectData })
    } catch (error) {
        res.status(501).json({ error: 'something went wrong', error })
    }
}

const getAllProject = async (req, res) => {
    try {
        const projectData = await Projects.find({})
        res.status(200).json({ status: 'ok', projectData })
    } catch (error) {
        res.status(501).json({ error: 'something went wrong', error })
    }
}

module.exports = { createProject, getAllProject }