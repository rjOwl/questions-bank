
//1 require the service
const { findQuestinosInDescendantsByAnnotation,
  getAllQuestionsService, loadQJsonTestObj} = require("../services/questions");

// 2 use the service
const loadTestQuestionsObj = async (req, res) => {
  try {
    const questions = await loadQJsonTestObj();
    return res.status(201).send(questions);
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went terribly wrong. Data might already exist.' });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await getAllQuestionsService();
    return res.status(200).send({"questions":questions});
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went wrong. Try again.' });
  }
}

// LOAD

// 
  const findQuestinosInDescendants = async (req, res) => {
    try {
      tag = req.query.q
      console.log(tag)
      const docs = await findQuestinosInDescendantsByAnnotation(tag)
      console.log(docs)
      return res.status(200).send(docs);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: 'Something went in questionswrong. Try again.' });
    }
  }


// 3 export
module.exports = {
    getAllQuestions,
    findQuestinosInDescendants,
    loadTestQuestionsObj
}