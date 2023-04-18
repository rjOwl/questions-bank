const express = require('express')
const questionsRouter = express.Router()

// 1 requrie controller
const {findQuestinosInDescendants, getAllQuestions, loadTestQuestionsObj} = require('../controllers/questions');

// 2 use 

// add all questions in the json file



/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: API for questions
 */

/**
 * @swagger
 * /questions/search:
 *   get:
 *     tags: [Questions]
 *     description: Get all questions that has the tag with the sub-tree of this tag
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Server error
 *     parameters:
 *       - name: q
 *         description: Example tag
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 */
questionsRouter.get('/search', findQuestinosInDescendants);

/**
 * @swagger
 * /questions/populate:
 *   post:
 *     tags: [Questions]
 *     description: create all the questions documents in mongodb
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server error
 */
questionsRouter.post('/populate', loadTestQuestionsObj);

/**
 * @swagger
 * /questions:
 *   get:
 *     tags: [Questions]
 *     description: returns all documents in the questions collection
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Server error
 */
questionsRouter.get('/', getAllQuestions);


// 3 export
module.exports = questionsRouter
