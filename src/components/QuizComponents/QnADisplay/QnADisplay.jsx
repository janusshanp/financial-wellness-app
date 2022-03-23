import { useEffect } from 'react';
import AnswerContainer from '../AnswerContainer/AnswerContainer'
import QuestionContainer from '../QuestionContainer/QuestionContainer'
import './QnADisplay.css'

function QnADisplay({questions, currentQuestion, setCurrentQuestion, options, setOptions}) {

  useEffect(()=>{
    console.log('QUESTIONS 2',questions);
    // setOptions(questions && randomizeAnswerOrder([...questions[currentQuestion]?.answers]))
  },[options]);
  
  return (
    <div className="qna-display">
      <QuestionContainer 
      questions = {questions}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}  />
      <AnswerContainer 
      questions = {questions}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      options = {options} 
      setOptions = {setOptions}/>
    </div>
  )
}

export default QnADisplay