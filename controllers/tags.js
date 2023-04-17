//1 require the service
const {loadTagsJsonTestObj, getAllTagsService} = require("../services/tags")

// 2 use the service

const loadTestTagsObj = async(req, res)=>{
    const result = await loadTagsJsonTestObj();
    if(result)
      return res.status(201).send({"tags": result });
    else
    return res.status(500).send({"Message": "Failed to create." });
}
const getAllTags = async (req, res) => {
  try {
    const tags = await getAllTagsService();
    return res.status(200).send({ tags});
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went wrong. Try again.' });
  }
}

// 3 export
module.exports = {
    loadTestTagsObj,
    getAllTags
}
