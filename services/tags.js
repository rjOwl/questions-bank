//1 require the model
const TagModel = require('../models/tags')
const {topic_tree} = require('../data/datasetSetup')

// Find the tag with the input name
// const getTagByName = async(tagName)=>{await Question.find({ tags: { $in: descendants } }).populate('tags')};

const loadTagsJsonTestObj = async()=>{
    console.log("services/tags.js")
    const result = await TagModel.insertMany(topic_tree);
    return result;
}
const getAllTagsService = async()=>{
    try{
        const result = await TagModel.find({});
        return result
    }catch{
        return result;
    }
}


module.exports = {loadTagsJsonTestObj, getAllTagsService}