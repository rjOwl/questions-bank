const mongoose = require('mongoose');

require('dotenv').config()

const TagSchema = new mongoose.Schema({
    name: {type: String, required: true, unique : true, index:true},
    ancestors_path: [{ type: String, required: true }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  }
)
const TagModel = mongoose.model('tags', TagSchema);

module.exports = TagModel;