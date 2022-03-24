require('dotenv').config();
require('./config/database');

const Topic = require('./models/topic');




async function populateDB(){
    await Topic.deleteMany({})
    const newTopic = await Topic.create([
    {
        imgUrl: 'spending_1.png',
        title: 'Spending',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'saving_lesson.png',
        title: 'Savings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'needs_vs_wants_lesson.png',
        title: 'Needs vs Wants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'investments_lesson.png',
        title: 'Investments',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'electronic_money_lesson.png',
        title: 'Electronic Money',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'credit_lesson.png',
        title: 'Credit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'banking_lesson.png',
        title: 'Banking',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'budgeting_lesson.png',
        title: 'Budgeting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },

    ])
}
  
populateDB()
