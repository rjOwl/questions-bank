const { qJson } = require('./questions_raw_documents');
const { tagJson } = require('./tags_raw_documents');


let topic_tree = ((tags) =>{
    let topicMap = new Map();
    tags.forEach((topic) => {
      if (topic['Tag Level 3']) {
        topicMap.set(topic['Tag Level 3'], { name: topic['Tag Level 3'], ancestors_path: [topic['Tag Level 1'], topic['Tag Level 2']],});
      }
      if (!topicMap.has(topic['Tag Level 2'])) {
        topicMap.set(topic['Tag Level 2'], { name: topic['Tag Level 2'], ancestors_path: [topic['Tag Level 1']], });
      }
      if (!topicMap.has(topic['Tag Level 1'])) {
        topicMap.set(topic['Tag Level 1'], { name: topic['Tag Level 1'], ancestors_path: [],})
      }
    });
  
    let topicsObject = [];
    topicMap.forEach((value, key) => {
      topicsObject.push(value);
    });
    return topicsObject;
  })(tagJson)

  const question_tree =((questions) =>{
    const cleanedQuestions = questions.map(question => {
        let annotations = [];
        question['Question number']
        for (const [key, value] of Object.entries(question)) {
        if (key !== 'Question number' && value) {
            annotations.push(value);
        }
        }
        return {
          name: question['Question number'],
          annotations: annotations,
        }
    });
    return cleanedQuestions;
})(qJson)

module.exports={
    topic_tree,
    question_tree
}
