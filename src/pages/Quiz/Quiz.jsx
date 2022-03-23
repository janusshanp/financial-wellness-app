import { useState } from 'react'
import NextQuestion from '../../components/QuizComponents/NextQuestion/NextQuestion'
import ProgressSection from '../../components/QuizComponents/ProgressSection/ProgressSection'
import QnADisplay from '../../components/QuizComponents/QnADisplay/QnADisplay'
import './Quiz.css'

function Quiz() {
  const [options, setOptions] = useState()
  const [currQues, setCurrQues]= useState(0)
  
  const questions = [
    {
      question:"What should you do?",
      answers:['Spend', 'Save', 'Budget', 'Invest'],
      correctAnswer:'Invest',
      explanation: "Investing is just the right thing to do"
    },
    {
      question:"Who should you invest in?",
      answers:['Tesla', 'GME', 'Yourself', 'This hackathon'],
      correctAnswer:'Tesla',
      explanation: 'Lowest rated EV, highest rated sigma male'
    },
    {
      question:"What is antiwork?",
      answers:['Not the move', 'Definitely the move', 'Move to a cheaper location', 'Move your body to the rythm'],
      correctAnswer:'Invest',
      explanation: 'just move your body'
    }]
  return (
    //total height is 85vh, 10 vh expected for nav and 5vh expected for header
    <div className="quiz-page">
      <ProgressSection />
      <QnADisplay />
      <NextQuestion /></div>
  )
}

export default Quiz