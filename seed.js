require('dotenv').config();
require('./config/database');

const Topic = require('./models/topic');




async function populateDB(){
    await Topic.deleteMany({})
    const newTopic = await Topic.create([
    {
        imgUrl: 'spending_1.png',
        title: 'Spending',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },
    {
        imgUrl: 'saving_lesson.png',
        title: 'Savings',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },
    {
        imgUrl: 'needs_vs_wants_lesson.png',
        title: 'Needs vs Wants',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },
    {
        imgUrl: 'investments_lesson.png',
        title: 'Investments',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },
    {
        imgUrl: 'electronic_money_lesson.png',
        title: 'Electronic Money',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },
    {
        imgUrl: 'credit_lesson.png',
        title: 'Credit',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },
    {
        imgUrl: 'banking_lesson.png',
        title: 'Banking',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },
    {
        imgUrl: 'budgeting_lesson.png',
        title: 'Budgeting',
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
    },

    ])
}
  
populateDB()
