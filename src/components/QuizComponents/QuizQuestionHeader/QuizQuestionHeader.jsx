import { Popover, OverlayTrigger } from 'react-bootstrap';
import './QuizQuestionHeader.css'

function QuizQuestionHeader({imgUrl, questions, currentQuestion,hint}) {
  function hintClick(){
    console.log('hint');
    console.log(hint)
  }

  const popover = (
    <div className="popover-hint-banner">
    <Popover id="popover-basic">
      <Popover.Header as="h3">You got this!</Popover.Header>
      <Popover.Body>
      {hint}
      </Popover.Body>
    </Popover>
    </div>
      
  );
  
  const HintPopover = () => (
    <span className="hint-pop">
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
    <div onClick={hintClick} className='question-hint circle-hint'>Hint
        </div>
    </OverlayTrigger>
    </span>
    )
  
  
  return (
    <div className="quiz-question-header">
      
      <div className="question-number circle-question-number"> Q{currentQuestion +1}
      </div>
      <div className = "lesson-image-quiz">
        <img src={require('../../../images/' + `${imgUrl}` )}></img>
        </div>
        <HintPopover />
      {/* <div onClick={hintClick} className='question-hint circle-hint'>
        <HintPopover />
        </div> */}
    </div>
  )
}

export default QuizQuestionHeader