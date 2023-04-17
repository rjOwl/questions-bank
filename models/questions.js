const mongoose = require('mongoose');
require('dotenv').config()

const QuestionSchema = new mongoose.Schema({
    name:  { type: String, required: true, unique : true},
    annotations: [{ type: String, ref: 'tags', required:true, index:true}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

const QuestionModel = mongoose.model('questions', QuestionSchema)
// QuestionModel.createIndexes()
module.exports = QuestionModel