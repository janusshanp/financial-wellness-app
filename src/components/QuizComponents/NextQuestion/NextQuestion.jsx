import { useEffect, useState } from 'react';
import './NextQuestion.css'
import {useNavigate, useLocation} from 'react-router-dom'

function NextQuestion({questions, currentQuestion, setCurrentQuestion, options, setOptions, numberOfQuestions, checkOrNext, setCheckOrNext, nextOrContinue, setNextOrContinue,radioBtnValue, setRadioBtnValue, selectedRadioButtonEvent, setSelectedRadioButtonEvent, correctAnswerRef, explanationVisibility, setExplanationVisibility, setShowConfetti, childUser, setChildUser}) {
  const location = useLocation()
  // const [lessonData, setLessonData] = useState(location.state.lessonData)
  
  let navigate = useNavigate();

  const [disabledState, setDisabledState] = useState(false)
  useEffect(()=>{
    console.log('questions NULLL', questions);
  },[currentQuestion,disabledState]);

  async function updateBalance(newBalance,childId){
    let jwt = localStorage.getItem('token')
    try{
      //indent this
      let fetchResponse= await fetch('/api/users/child/updateBalance',{
          method: "POST",
          headers: {
              'Authorization': 'Bearer ' + jwt,
              "Content-Type": "application/json"
          },
          body: JSON.stringify({

              balance: newBalance,
              id:childId
          })
      })
      if  (fetchResponse.ok){
        let newUser = await fetchResponse.json()
        console.log(newUser)
        setChildUser(newUser)
            
       }else{
           console.log('error')
       }
    }
    catch(err){
      console.log('update Balance Error', err)
    }  
}



  //next question button functionality
 function next(){
   //styling removed from components
   setExplanationVisibility('hidden')
   setShowConfetti(false)
   selectedRadioButtonEvent.checked=false;
   selectedRadioButtonEvent.parentElement.style.border=""
   selectedRadioButtonEvent.parentElement.style.opacity="1";
  //  console.log(correctAnswerRef.current.children[1])
   correctAnswerRef.current.children[1].style.color="";
   if (nextOrContinue ==="Continue"){
     //ICEBOX Complete Topic boolean
     let newBalance = childUser.totalBalance + 3;
     updateBalance(newBalance, childUser._id);
    //  console.log(childUser.totalBalance)
    navigate(`/results/one`)
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