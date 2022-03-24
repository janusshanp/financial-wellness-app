import { useEffect } from 'react';
import './ProgressBar.css'

function ProgressBar({numberOfQuestions, currentQuestion}) {
  // const testPercentage = 10;
  let percentage = ((currentQuestion+1)/numberOfQuestions)*100;
  const updatePercentage = ()=>{
    console.log( 'before', percentage)
    percentage = ((currentQuestion+1)/numberOfQuestions)*100
    console.log('after', percentage)
  }
  useEffect(()=>{
    updatePercentage();
  },[currentQuestion])
  return (
    <div className="progress-bar">
      <div className="meter orange">
	<span style={{width: `${percentage}%`}}></span>
</div></div>
  )
}

export default ProgressBar