const express = require('express')
const tagsRouter = express.Router()

// 1 requrie controller
const {findTagByName, test_tags_api, loadTestTagsObj} = require('../controllers/tags');

// 2 use 
// tagsRouter.get('/getAll', (req, res) => {
//     return res.json({ allBooks, countBooks });
// })

// questionsRouter.get('/search', searchByQueryParam);
tagsRouter.post('/populate', loadTestTagsObj);



tagsRouter.get('/test_api', test_tags_api);
tagsRouter.get('/tag', findTagByName);
// router.post('/questions', addAllQuestions);
// router.get('/topics', getAllTopics);
// router.post('/topics', addAllTopics);


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

// /   \
// /     \
// /       \
// *         *
// / \       / \
// /   \     /   \
// *     *   *     *
// / \   / \ / \   / \
// *   **   * *   * *  *


// tags_schema
// tags:{
//     "math":{
//         "geometyr":{
            
//         }
//     }
//     "quesotin":
//     }

// }