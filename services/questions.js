//1 require the model
const QuestionModel = require('../models/questions')
const {question_tree} = require('../data/datasetSetup');
const TagModel = require('../models/tags');

// 2 use

// check if dataset is loaded

const loadQJsonTestObj = async()=>{
    console.log("services/questions.js")
    const result = await QuestionModel.insertMany(question_tree);
    return result;
}

const getAllQuestionsService = async()=>{
    try{
        const result = await QuestionModel.find({});
        return result
    }catch{
        return result;
    }
}

// logic
const  findQuestinosInDescendantsByAnnotation = async(tagName)=> {
    // Find all tags that either have the specified tag name in their ancestors path
    // or have the same ID as the specified tag name
    const ancestors_path_query = await TagModel.find({
        "$or": [
          {"ancestors_path": tagName},
          {"name": tagName}
        ]
      }).lean().then(tags => Array.from(tags, tag => tag.name))

    // Find all questions that have at least one annotation in the ancestors_path_query array
    const result = await QuestionModel.find({
        "annotations": {
          "$in": ancestors_path_query
        }
      }).lean().then(questions => Array.from(questions, question => question.name));
      console.log(result)
        return {"Questions": result}
  }
  
// export
module.exports = {
    loadQJsonTestObj,
    getAllQuestionsService,
    findQuestinosInDescendantsByAnnotation}

