import { useEffect } from 'react';
import './QuestionContainer.css'

function QuestionContainer({questions, currentQuestion, setCurrentQuestion}) {
  function hintClick(){
    console.log('hint');
  }
  useEffect(()=>{
    console.log('QUESTIONS',questions);
    // setOptions(questions && randomizeAnswerOrder([...questions[currentQuestion]?.answers]))
  },[]);

  return (
    <div className="question-container">
      <div className="question-number circle-question-number"> Q{currentQuestion +1}
      </div>
      <div className='question-string'>
        HERE {questions[currentQuestion].question}
      </div>
      <div className='question-hint circle-hint'><button onClick={hintClick} className='hint-button'>Hint
        </button></div>
    </div>
  )
}

export default QuestionContainer