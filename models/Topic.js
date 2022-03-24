const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {type:String, required: true},// Is it a b or c
  answers:[{type: String, required: true}], //a, b, c
<<<<<<< HEAD
  correctAnswer:[{type: String, required: true}], // c
  explanation: {type: String, required: true}
=======
  correctAnswer:{type: String, required: true}, // c
  explanation: {type: String, required: true, maxlength:120}
>>>>>>> 2d85965fee9247bd245e985769a1237e1df58fa4
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


