const express = require('express')
const tagsRouter = express.Router()

// 1 requrie controller
const {getAllTags, loadTestTagsObj} = require('../controllers/tags');

// 2 use 
tagsRouter.post('/populate', loadTestTagsObj);
tagsRouter.get('/all', getAllTags);


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