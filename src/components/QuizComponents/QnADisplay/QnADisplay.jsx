import { useEffect } from 'react';
import AnswerContainer from '../AnswerContainer/AnswerContainer'
import QuestionContainer from '../QuestionContainer/QuestionContainer'
import './QnADisplay.css'

function QnADisplay({questions, currentQuestion, setCurrentQuestion, options, setOptions, radioBtnValue, setRadioBtnValue, selectedRadioButtonEvent, setSelectedRadioButtonEvent, correctAnswerRef, explanationVisibility, setExplanationVisibility}) {

  
  return (
    <div className="qna-display">
      <QuestionContainer 
      questions = {questions}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}  />
      <AnswerContainer 
      questions = {questions}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      options = {options} 
      setOptions = {setOptions}
      radioBtnValue={radioBtnValue}
      setRadioBtnValue = {setRadioBtnValue}
      selectedRadioButtonEvent = {selectedRadioButtonEvent}
      setSelectedRadioButtonEvent = {setSelectedRadioButtonEvent}
      
      correctAnswerRef = {correctAnswerRef}
      
      explanationVisibility = {explanationVisibility}
      setExplanationVisibility = {setExplanationVisibility}/>
    </div>
  )
}

export default QnADisplay