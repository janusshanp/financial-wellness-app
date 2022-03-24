require('dotenv').config();
require('./config/database');

const Topic = require('./models/topic');




async function populateDB(){
    await Topic.deleteMany({})
    const newTopic = await Topic.create([
    {
        imgUrl: 'spending_1.png',
        storyTitle: "The Ant and the Grasshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Spending',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'saving_lesson.png',
        storyTitle: "Thegdfgdfgand the Grasshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Savings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'needs_vs_wants_lesson.png',
        storyTitle: "The dfgdfhe Grasshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Needs vs Wants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'investments_lesson.png',
        storyTitle: "TgdfgfdGrasshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Investments',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'electronic_money_lesson.png',
        storyTitle: "The Andfgdfgdfgfdrasshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Electronic Money',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'credit_lesson.png',
        storyTitle: "The gfdgdfgfde Grasshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Credit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'banking_lesson.png',
        storyTitle: "The Antdfgfdgdfgf Grasshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Banking',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    {
        imgUrl: 'budgeting_lesson.png',
        storyTitle: "The Adfgdfgdfgfdshopper",
        quiz: [
            {
                question: 'When I buy something, I give them money, and then they give me something in return. True or False?' ,
                answer: ['True', 'False'],
                correctAnswer: 'True',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: 'Should I spend money as soon as I get it?' ,
                answer: ['Yes', 'Before any spending, I need to think it through', 'No'],
                correctAnswer: 'Should I spend money as soon as I get it?',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            },
            {
                question: "Should I spend money I don't have" ,
                answer: ['Yes', 'No'],
                correctAnswer: 'No',
                hint: 'Dont worry you got this because blah blah blah blah',
                explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi'
            }
        ],
        title: 'Budgeting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi',
        lessonText: 'Long ago in a meadow by the forest — not far from that mean old wolf’s house — a young grasshopper was enjoying his summer, never bothering to save for the future. He loved playing his fiddle and making music for the other insects. He even bought a fancier, more expensive fiddle with a credit card. His friend the ant, however, was different. He was often working, saving and planning for the future. The grasshopper liked the ant, but didn’t pay much attention when the ant tried to tell him about saving. He was more concerned with living in the moment. Before the grasshopper knew it, summer was over. It was cold, and his heating bill was getting bigger. The grasshopper’s credit cards were maxed out, and he was running out of money. Worst of all, he was nearing retirement (bugs don’t live very long).'
    },
    ])
}
  
populateDB()
