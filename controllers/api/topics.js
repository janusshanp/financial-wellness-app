const TopicModel = require('../../models/Topic');

module.exports = {
  list,
};

async function list(req, res) {
        const topics = await TopicModel.find({});
        console.log(topics)
        res.status(200).json(topics)         
}