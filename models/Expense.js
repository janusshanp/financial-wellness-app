const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  description: {type: String, required: true},
  type: {
    type: String,
    enum:['meals and entertainment', 'travel', 'office supplies', 'education', 'health'],
    required: true
  },
  subtotal: {
    type: Number,
    required: true,
  },  
  department: {
    type: String,
    enum:['Finance', 'Quality Assurance', 'Design', 'Marketing', 'Human Resources'],
    required: true,
  }, 
  tax: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum:['pending', 'approved', 'declined',],
  },
  picture: {
    type: Array,
    required: true,
  }  
}, {
  timestamps: true,
});

let Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;