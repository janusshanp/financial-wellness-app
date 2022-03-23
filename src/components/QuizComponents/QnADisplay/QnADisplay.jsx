import AnswerContainer from '../AnswerContainer/AnswerContainer'
import QuestionContainer from '../QuestionContainer/QuestionContainer'
import './QnADisplay.css'

function QnADisplay() {
  return (
    <div className="qna-display">
      <QuestionContainer />
      <AnswerContainer />
    </div>
  )
}

export default QnADisplay