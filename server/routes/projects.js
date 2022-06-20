const express = require('express');
const router = express.Router()
const { createProject, getAllProject } = require('../controllers/projects')

router.route('/').post(createProject).get(getAllProject)


module.exports = router