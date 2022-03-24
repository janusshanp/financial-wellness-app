import './QuizQuestionHeader.css'

function QuizQuestionHeader({imgUrl, questions, currentQuestion,hint}) {
  function hintClick(){
    console.log('hint');
    console.log(hint)
  }
  
  return (
    <div className="quiz-question-header">
      
      <div className="question-number circle-question-number"> Q{currentQuestion +1}
      </div>
      <div className = "lesson-image-quiz">
        <img src={require('../../../images/' + `${imgUrl}` )}></img>
        </div>

      <div onClick={hintClick} className='question-hint circle-hint'>Hint
        </div>
    </div>
  )
}

export default QuizQuestionHeader