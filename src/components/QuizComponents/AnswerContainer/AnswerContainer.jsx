import './AnswerContainer.css'
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useEffect } from 'react';

function AnswerContainer({questions, currentQuestion, setCurrentQuestion, options, setOptions, radioBtnValue, setRadioBtnValue, selectedRadioButtonEvent, setSelectedRadioButtonEvent, correctAnswerRef, explanationVisibility, setExplanationVisibility}) {
  const popover = (
    <div className="popover-banner">
    <Popover id="popover-basic">
      <Popover.Header as="h3">Why is this correct?</Popover.Header>
      <Popover.Body>
      {questions[currentQuestion].explanation}
      </Popover.Body>
    </Popover>
    </div>
      
  );
  
  const Explanation = () => (
    <span style={{visibility:explanationVisibility}} className="explain-pop hide">
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
      <Button variant="success">Why?</Button>
    </OverlayTrigger>
    </span>
  );
  const randomizeAnswerOrder = (answers) =>{
    return answers.sort(()=>Math.random()-0.5);
  };
  useEffect(()=>{
    if(options){
      setOptions(questions && randomizeAnswerOrder([...questions[currentQuestion]?.answers]))
    }
  },[currentQuestion]);

  //Change Answer value
  function changeRadioButton(e){
    setRadioBtnValue(e.target.value);
    setSelectedRadioButtonEvent(e.target);
  }

  return (
    

    <div className="answer-container">


{ options ? 
    <>
      {options.map((element, i)=>(
        
      element === questions[currentQuestion].correctAnswer ? 
      <div ref={correctAnswerRef} className="answer-option">
        <input className="answer-radio" onChange={changeRadioButton} name={currentQuestion} value={element} id={element} type="radio"/>
        <label className="answer-label" htmlFor={element}>{element}</label>
        <Explanation />
      </div>
      :
    <div className="answer-option">
      <input onChange={changeRadioButton} className="answer-radio" name={currentQuestion} value={element} id={element} type="radio"/>
      <label className="answer-label" htmlFor={element}>{element}</label>
    </div>
)) }
    
    </>
    : "Loading"
  }



    
    
  </div>
    
  )
}

export default AnswerContainer