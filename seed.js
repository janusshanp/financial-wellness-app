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
    }
    ])
}
  
populateDB()
