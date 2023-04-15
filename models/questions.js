const mongoose = require('mongoose');
require('dotenv').config()

const QuestionSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    tag_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag', required:True }],
})

const QuestionModel = mongoose.model('Question', QuestionSchema)
module.exports = QuestionModel