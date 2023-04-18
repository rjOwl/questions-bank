const express = require('express')
const tagsRouter = express.Router()

// 1 requrie controller
const {getAllTags, loadTestTagsObj} = require('../controllers/tags');

// 2 use 

/**
 * @swagger
 * tags:
 *   name: Tags
 *   description: API for Tags
 */


/**
 * @swagger
 * /tags/populate:
 *   post:
 *     tags: [Tags]
 *     description: create all the tag documents in mongodb
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server error
 */
tagsRouter.post('/populate', loadTestTagsObj);

/**
 * @swagger
 * /tags:
 *   get:
 *     tags: [Tags]
 *     description: returns all documents in the tags collection
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Server error
 */
tagsRouter.get('/', getAllTags);


// 3 export
module.exports = tagsRouter

// const {
//   searchByQueryParam, addAllQuestions, getAllQuestions, getAllTopics, addAllTopics, test_question_api
// } = require('../controllers/questions');
// module.exports = router;
//                                 phsyics
//                                     |
//                         /-----------------------------\
//                     Modern                          Electroics
//                        |                                |
//           /--------------------\                        |
//      quantum                 relativity             Charge of particles
//         |                       |                       |
//    /----------\             /----------\                |
// wave     Heisenberg’s     special     general       Electron Charge


// tags_schema
// tags:{
//     "math":{
//         "geometyr":{
            
//         }
//     }
//     "quesotin":
//     }

// }