import { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ChildNav from '../../components/ChildNav/ChildNav'
import CheckAnswer from '../../components/QuizComponents/CheckAnswer/CheckAnswer'
import NextQuestion from '../../components/QuizComponents/NextQuestion/NextQuestion'
import ProgressSection from '../../components/QuizComponents/ProgressSection/ProgressSection'
import QnADisplay from '../../components/QuizComponents/QnADisplay/QnADisplay'
import QuizQuestionHeader from '../../components/QuizComponents/QuizQuestionHeader/QuizQuestionHeader'
import './Quiz.css'
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import ChildHeader from '../../components/ChildHeader/ChildHeader'


function Quiz({childUser, setChildUser}) {
  const { width, height } = useWindowSize()
  const location = useLocation();
  const [lessonData, setLessonData] = useState(location.state.lessonData);
  const [questionList,setQuestionList] = useState(lessonData.quiz)
  const [options, setOptions] = useState()
  const [currentQuestion, setCurrentQuestion]= useState(0)
  const [checkOrNext, setCheckOrNext] = useState('check')
  const [nextOrContinue, setNextOrContinue] = useState('Next')
  const [radioBtnValue, setRadioBtnValue] = useState(0)
  const [selectedRadioButtonEvent, setSelectedRadioButtonEvent] = useState(0)
  const correctAnswerRef = useRef();
  const [explanationVisibility, setExplanationVisibility] = useState('hidden')
  const [showConfetti, setShowConfetti] = useState(false) ;
  const [timer, setTimer] = useState(0)
  function checkAnswer(){

  }

    useEffect(()=>{
      // questions = location.state.lessonData.quiz
      console.log('ChildUser', childUser)
      setOptions(questionList && randomizeAnswerOrder([...questionList[currentQuestion]?.answers]))
    },[]);
    // console.log(options)
    
    const randomizeAnswerOrder = (answers) =>{
      return answers.sort(()=>Math.random()-0.5);
    };
  return (
    //total height is 85vh, 10 vh expected for nav and 5vh expected for header
    <div className="quiz-page">
      <ChildHeader />
      <div className="confetti-div">
      {showConfetti && <Confetti width={width} height={height}/>}
      </div>
      <ProgressSection 
      numberOfQuestions = {questionList.length}
      currentQuestion={currentQuestion}
      />
      <QuizQuestionHeader
      imgUrl = {lessonData.imgUrl}
      questions = {questionList}
      currentQuestion={currentQuestion}
      hint = {questionList[currentQuestion].hint}
      />
      <QnADisplay 
      questions = {questionList}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      options = {options}
      setOptions={setOptions}
      radioBtnValue={radioBtnValue}
      setRadioBtnValue = {setRadioBtnValue}
      selectedRadioButtonEvent = {selectedRadioButtonEvent}
      setSelectedRadioButtonEvent = {setSelectedRadioButtonEvent}
      correctAnswerRef = {correctAnswerRef}
      explanationVisibility = {explanationVisibility}
      setExplanationVisibility = {setExplanationVisibility}
      />
      <div className="quiz-button">
        {checkOrNext ==='check' ?
      <CheckAnswer
      questions = {questionList}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      options = {options}
      setOptions={setOptions}
      
      numberOfQuestions = {questionList.length}
      checkOrNext={checkOrNext}
      setCheckOrNext={setCheckOrNext}
      nextOrContinue={nextOrContinue}
      setNextOrContinue={setNextOrContinue}
      radioBtnValue={radioBtnValue}
      selectedRadioButtonEvent = {selectedRadioButtonEvent}
      setSelectedRadioButtonEvent = {setSelectedRadioButtonEvent}

      correctAnswerRef = {correctAnswerRef}
      explanationVisibility={explanationVisibility}
      setExplanationVisibility={setExplanationVisibility}
      setShowConfetti = {setShowConfetti}/>:
      <NextQuestion 
      questions = {questionList}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      options = {options}
      setOptions={setOptions}
      
      numberOfQuestions = {questionList.length}
      checkOrNext={checkOrNext}
      setCheckOrNext={setCheckOrNext}
      nextOrContinue={nextOrContinue}
      setNextOrContinue={setNextOrContinue}
      radioBtnValue={radioBtnValue}
      setRadioBtnValue = {setRadioBtnValue}
      selectedRadioButtonEvent = {selectedRadioButtonEvent}
      setSelectedRadioButtonEvent = {setSelectedRadioButtonEvent}
      
      correctAnswerRef = {correctAnswerRef}
      
      
      explanationVisibility = {explanationVisibility}
      setExplanationVisibility = {setExplanationVisibility}
      setShowConfetti = {setShowConfetti}

      childUser={childUser}
      setChildUser={setChildUser}
      />
    }
    </div>
    <ChildNav />
      </div>

  )
}

export default Quiz