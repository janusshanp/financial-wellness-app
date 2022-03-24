import { useEffect } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import './ProgressSection.css'

function ProgressSection({numberOfQuestions, currentQuestion}) {
  let message = ""
  useEffect(()=>{
    console.log("DODODODODODO")
    const fraction = (currentQuestion+1)/numberOfQuestions
    if(fraction === 1){
      message = "Last Question"
    }
    else if(fraction > 0.8){
      message = "Almost Done, Keep Going!"
      
    }
    else if(fraction > 0.6){
      message = "Great Job!"
      
    }
    else if(fraction > 0.4){
      message = "Good Job!"
      
    }
    else if(fraction > 0.2){
      message = "Learning is fun!"
      
    }
    else{
      message = "Let the learning begin!"
    }
  },[currentQuestion])

  return (
    <div className="progress-section">

      <div className='quiz-progress-text'>

        {`${currentQuestion+1}/${numberOfQuestions} Message: ${message}`}

      </div>
      <ProgressBar 
      numberOfQuestions={numberOfQuestions}
      currentQuestion={currentQuestion} />
      </div>

      

  )
}

export default ProgressSection