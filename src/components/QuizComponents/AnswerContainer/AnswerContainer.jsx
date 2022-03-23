import './AnswerContainer.css'
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useEffect } from 'react';

function AnswerContainer({questions, currentQuestion, setCurrentQuestion, options, setOptions}) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );
  const MyButton = () =>(
    <button></button>
  )
  useEffect(()=>{
    if(options){
      console.log('options 123', options)
      console.log('rightanswer', questions[currentQuestion].correctAnswer)
    }
  },[options, questions]);

  const myList = [1,2,3,4]
  return (
    

    <div className="answer-container">
    { options ? 
    <div>
      {options.map((element)=>(
      element === questions[currentQuestion].correctAnswer ? <button className="home-button">
        {element} answer
      </button>:
    <Button>{element}</Button>)) }
    
    </div>
    : "Loading"
  }

  { options ?
  <button>hi</button> : <button>THS WORKED</button>
}
    
    
  </div>
    
  )
}

export default AnswerContainer