const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  description: {type: String, required: true},
  username: {
    type: String, 
    unique: true,
    required: true},
  type: {
    type: String,
    unique: true,
    required: true
  },
  subtotal: {
    type: Number,
    required: true,
  },  
  department: {
    type: String,
    required: true,
  }, 
  Tax: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
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

let User = mongoose.model('Expense', expenseSchema);
module.exports = Expense;