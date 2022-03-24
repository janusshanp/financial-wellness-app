import { useEffect } from 'react';
import './QuestionContainer.css'

function QuestionContainer({questions, currentQuestion, setCurrentQuestion}) {
  function hintClick(){
    console.log('hint');
  }

  return (
    <div className="question-container">
      <div className='question-string'>
         {questions[currentQuestion].question}
      </div>
    </div>
  )
}

export default QuestionContainer