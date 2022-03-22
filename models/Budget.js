const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  name: {
    type:String, 
    required:true,
  },
  description: {
    type:String, 
    required:true,
  },
  manager:[
    {type: Schema.Types.ObjectId, ref:'User', required: true}
  ],
  expenser: [
    {type: Schema.Types.ObjectId, ref:'User', required: true}
  ],
  total: {
    type:Number, 
    required:true
  },  
  startDate: {
    type: Date,
    required:true,
  }, 
  endDate: {
    type: Date,
    required:true,
  },
  expenses:[
    {type: Schema.Types.ObjectId, ref:'Expense'}
  ] 
}, {
  timestamps: true
});

let Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;