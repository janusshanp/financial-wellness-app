import { useEffect } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import './ProgressSection.css'

function ProgressSection({numberOfQuestions, currentQuestion}) {
  let message = ""
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
  useEffect(()=>{
    
  },[currentQuestion])

  return (
    <div className="progress-section">

      <div className='quiz-progress-text'>

        {`${currentQuestion+1}/${numberOfQuestions}`}

      </div>
      <div className="progress-message">
      {message}
      </div>
      <div className="user-img">
        <img src={require(`../../../images/avatar_dog.png`)}></img>
      </div>
      <div className="image-score">
        <div className="image">
        <img src={require(`../../../images/avatar_polar_bear.png`)}></img>
        </div>
          <div className="score">
            1
          </div>
      </div>
      <ProgressBar 
      numberOfQuestions={numberOfQuestions}
      currentQuestion={currentQuestion} />
      </div>

      

  )
}

export default ProgressSection