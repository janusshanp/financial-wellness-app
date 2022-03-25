import "./LessonStory.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ChildNav from "../ChildNav/ChildNav";
import ChildHeader from "../ChildHeader/ChildHeader";

export default function LessonStory(props) {
  const location = useLocation();
  const [lessonData, setLessonData] = useState(location.state.lessonData);

  let navigate = useNavigate();

  return (
    <div className="story-page">
      <ChildHeader childUser={props.childUser}/>
      <h1>{lessonData.storyTitle}</h1>
      <div className="lesson-story">
        
        <img src={require("../../images/ant.png")} />
        <p>{lessonData.lessonText}</p>
        <br></br>
        
      </div>
      
      <button
        onClick={() =>
          navigate(`/quiz`, {
            state: { lessonData },
          })
        }
        className="lesson-button"
      >
        Quiz!
      </button>
      <ChildNav />
    </div>
  );
}
