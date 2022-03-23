import { useEffect } from 'react';
import './QuestionContainer.css'

function QuestionContainer({questions, currentQuestion, setCurrentQuestion}) {
  useEffect(()=>{
    console.log('QUESTIONS',questions);
    // setOptions(questions && randomizeAnswerOrder([...questions[currentQuestion]?.answers]))
  },[]);

  return (
    <div className="question-container">
      <div className="question-number"> Question {currentQuestion +1}
      </div>
      <div className='question'>
        HERE {questions[currentQuestion].question}
      </div>
    </div>
  )
}

export default QuestionContainer