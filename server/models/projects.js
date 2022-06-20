const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    url: { type: String },
    imgLink: { type: String }
})

module.exports = mongoose.model('projects', projectSchema)