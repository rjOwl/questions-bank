const mongoose = require('mongoose');
require('dotenv').config()

const QuestionSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    tag_list: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
})

const QuestionModel = mongoose.model('Question', QuestionSchema)
module.exports = QuestionModel