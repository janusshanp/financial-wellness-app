const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  username: {
    type:String, 
    unique: true,
    required:true
  },
  email: {
    type:String,
    unique:true,
    trim: true,
    lowercase:true, 
    required:true
  },
  password: {
    type: String,
    trim: true,
    minlength: 7,
    required: true,
  }, 
   
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret){
      delete ret.password;
      return ret 
    }
  }
});

let User = mongoose.model('User', userSchema);

module.exports = User;