import { useEffect, useState } from 'react';
import './NextQuestion.css'

function NextQuestion({questions, currentQuestion, setCurrentQuestion, options, setOptions, numberOfQuestions, checkOrNext, setCheckOrNext, nextOrContinue, setNextOrContinue,radioBtnValue, setRadioBtnValue, selectedRadioButtonEvent, setSelectedRadioButtonEvent, correctAnswerRef, explanationVisibility, setExplanationVisibility}) {
  const [disabledState, setDisabledState] = useState(false)
  useEffect(()=>{
    console.log('questions NULLL', questions);
  },[currentQuestion,disabledState]);

  //next question button functionality
 function next(){
   //styling removed from components
   setExplanationVisibility('hidden')
   selectedRadioButtonEvent.checked=false;
   selectedRadioButtonEvent.parentElement.style.border=""
   selectedRadioButtonEvent.parentElement.style.opacity="1";
   correctAnswerRef.current.style.border="";
   if (nextOrContinue ==="Continue"){
     console.log('CONTINUE TO LESSON PATH!')
     return
   }

   if(currentQuestion+1 === numberOfQuestions){
     console.log('disable button')
     setDisabledState(true)
     //potentially results page
     setCheckOrNext('check')
     return
    }
    setCurrentQuestion(currentQuestion+1)
    setRadioBtnValue(null)
    setCheckOrNext('check')
  }
  return (
    <div className="next-question">
      <button disabled={disabledState} onClick={next} className="next-question-btn">{nextOrContinue}</button>	</div>
  )
}

export default NextQuestion