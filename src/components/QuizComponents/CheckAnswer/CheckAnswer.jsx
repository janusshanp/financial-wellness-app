import './CheckAnswer.css'

function CheckAnswer({questions, currentQuestion, setCurrentQuestion, options, setOptions, numberOfQuestions, checkOrNext, setCheckOrNext, nextOrContinue, setNextOrContinue, radioBtnValue, selectedRadioButtonEvent, correctAnswerRef, explanationVisibility, setExplanationVisibility}) {

  //next question button functionality
 function check(){
  // setCurrentQuestion(currentQuestion+1)
  // console.log(correctAnswerRef.current.children[2].style.opacity,"REF")
  if(!radioBtnValue){
    return
  }
  setExplanationVisibility('visible')
  console.log(correctAnswerRef.current.children[2],"Base")
  console.log(correctAnswerRef.current.children[2].style,"REFA")
  console.log(correctAnswerRef.current.children[2].className,"class")
  correctAnswerRef.current.children[2].className = "explain-pop"
  console.log(correctAnswerRef.current.children[2].className,"classUpdate")
  // correctAnswerRef.current.children[1].style.backgroundColor = "blue"
  // correctAnswerRef.current.children[2].style[0]="opacity:1"
  correctAnswerRef.current.children[2].style.opacity="1";
  console.log(correctAnswerRef.current.children[2].style.visibility,"REF1")
  console.log(correctAnswerRef.current.children[2].style.opacity,"REF2")
  console.log(correctAnswerRef.current.children[2].style[0],"REF3")
  console.log(correctAnswerRef.current.children[2].style,"REF4")
  //check if radio button value is the correct answer
  console.log('RADIO BUTON', radioBtnValue)
  if (radioBtnValue === questions[currentQuestion].correctAnswer){
    console.log(selectedRadioButtonEvent.parentElement.style.backgroundColor);
    //Styling applied to components
    //ICEBOX CONFETTI
    selectedRadioButtonEvent.parentElement.style.border="2px dashed green";
    // selectedRadioButtonEvent.parentElement.style.border="2px dashed green";
    console.log('good job')
  }
  else{
    //Styling applied to incorrect component and correct component
    selectedRadioButtonEvent.parentElement.style.border="2px dashed red";
    correctAnswerRef.current.style.border = "2px solid green"
    selectedRadioButtonEvent.parentElement.style.opacity="0.5";

    console.log('oops')
  }
  setCheckOrNext('next')
  console.log(currentQuestion)
  if(currentQuestion+1 === numberOfQuestions){
    //potentially results page
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