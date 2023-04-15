const mongoose = require('mongoose');
const { Schema } = mongoose;

require('dotenv').config()

const TagSchema = new Schema({
    _name: String,
    children: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
  }
)
const TagModel = mongoose.model('Tag', TagSchema);
module.exports = TagModel;