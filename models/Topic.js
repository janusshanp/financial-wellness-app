const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {type:String, required: true},// Is it a b or c
  answers:[{type: String, required: true}], //a, b, c
  correctAnswer:{type: String, required: true}, // c
  hint:{type:String, required:true},
  explanation: {type: String, required: true, maxlength:120}
})

const topicSchema = new Schema({
  quiz: [questionSchema],
  imgUrl:{type: Schema.Types.Mixed, required: true},
  title: {type: String, required: true},
  description:{type:String, required: true},
  storyTitle: {type:String, required: true},
  lessonText:{type:String, required: true},
}, {
  timestamps: true
});

let Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;


