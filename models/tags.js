const mongoose = require('mongoose');
const { Schema } = mongoose;

require('dotenv').config()

const TagSchema = new Schema({
    _name: String,
    path: { type: String, required: true },
  }
)
const TagModel = mongoose.model('Tag', TagSchema);
module.exports = TagModel;