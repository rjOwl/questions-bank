const express = require('express')
const questionsRouter = express.Router()

// 1 requrie controller
const {test_question_api, findQuestinosInDescendants, getAllQuestions, loadTestQuestionsObj} = require('../controllers/questions');

// 2 use 

// add all questions in the json file
questionsRouter.get('/search', findQuestinosInDescendants);
questionsRouter.post('/populate', loadTestQuestionsObj);
questionsRouter.get('/test_api', test_question_api);
questionsRouter.get('/all', getAllQuestions);



// 3 export
module.exports = questionsRouter
