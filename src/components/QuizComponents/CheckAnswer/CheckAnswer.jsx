import './CheckAnswer.css'

function CheckAnswer({questions, currentQuestion, setCurrentQuestion, options, setOptions, numberOfQuestions, checkOrNext, setCheckOrNext, nextOrContinue, setNextOrContinue, radioBtnValue, selectedRadioButtonEvent, correctAnswerRef, explanationVisibility, setExplanationVisibility, setShowConfetti}) {

  //next question button functionality
 function check(){
  if(!radioBtnValue){
    return
  }
  setExplanationVisibility('visible')
  correctAnswerRef.current.children[2].className = "explain-pop"
  correctAnswerRef.current.children[2].style.opacity="1";
  //check if radio button value is the correct answer
  if (radioBtnValue === questions[currentQuestion].correctAnswer){
    //Styling applied to components
    setShowConfetti(true)
    selectedRadioButtonEvent.parentElement.children[1].style.color="green";
  }
  else{
    //Styling applied to incorrect component and correct component
    selectedRadioButtonEvent.parentElement.style.border="2px dashed red";
    // console.log(correctAnswerRef.current)
    correctAnswerRef.current.children[1].style.color = "green"
    selectedRadioButtonEvent.parentElement.style.opacity="0.5";

  }
  setCheckOrNext('next')
  if(currentQuestion+1 === numberOfQuestions){
    setCheckOrNext('done')
    setNextOrContinue('Continue')
  }
}

  return (
    
    <div className="check-answer">
      <button  onClick={check} className="check-answer-btn">Check Answer</button>	</div>
  )
}

export default CheckAnswer