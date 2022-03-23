import { useEffect, useState } from 'react'
import NextQuestion from '../../components/QuizComponents/NextQuestion/NextQuestion'
import ProgressSection from '../../components/QuizComponents/ProgressSection/ProgressSection'
import QnADisplay from '../../components/QuizComponents/QnADisplay/QnADisplay'
import './Quiz.css'

function Quiz({questions}) {
  const [options, setOptions] = useState()
  const [currentQuestion, setCurrentQuestion]= useState(0)


    useEffect(()=>{
      console.log('questions 0', questions);
      setOptions(questions && randomizeAnswerOrder([...questions[currentQuestion]?.answers]))
    },[questions]);
    // console.log(options)
    
    const randomizeAnswerOrder = (answers) =>{
      return answers.sort(()=>Math.random()-0.5);
    };
  return (
    //total height is 85vh, 10 vh expected for nav and 5vh expected for header
    <div className="quiz-page">
      <ProgressSection 
      numberOfQuestions = {questions.length}
      />
      <QnADisplay 
      questions = {questions}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      options = {options}
      setOptions={setOptions}
      />
      <NextQuestion /></div>
  )
}

export default Quiz