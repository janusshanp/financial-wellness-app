const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {type:String, required: true},// Is it a b or c
  answer:[{type: String, required: true}], //a, b, c
  correctAnswer:[{type: String, required: true}], // c
  explanation: {type: String, required: true}
})

const topicSchema = new Schema({
  quiz: [questionSchema],
  category:{type: String, required: true},
  title: {type: String, required: true},
  lesson:{type:String, required: true},


}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret){
      delete ret.password;
      return ret 
    }
  }
});

let Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;