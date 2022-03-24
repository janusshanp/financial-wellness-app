import { useEffect } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import './ProgressSection.css'

function ProgressSection({numberOfQuestions, currentQuestion}) {


  return (
    <div className="progress-section">

      <div className='quiz-progress-text'>

        {`${currentQuestion+1}/${numberOfQuestions} `}
      </div>
      <ProgressBar 
      numberOfQuestions={numberOfQuestions}
      currentQuestion={currentQuestion} />
      </div>

      

  )
}

export default ProgressSection