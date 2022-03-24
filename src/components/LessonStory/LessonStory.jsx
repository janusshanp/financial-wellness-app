import "./LessonStory.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ChildNav from "../ChildNav/ChildNav";

export default function LessonStory(props) {
  const location = useLocation();
  const [lessonData, setLessonData] = useState(location.state.lessonData);


  let navigate = useNavigate();

  return (
    <div className="story-page">
        <h1>{lessonData.storyTitle}</h1>
      <div className="lesson-story">
        
        <img src={require("../../images/ant.png")} />
        <p>{lessonData.lessonText}</p>
        <br></br>
        
      </div>
      <button
        onClick={() =>
          navigate(`/lesson/${lessonData._id}/description`, {
            state: { lessonData },
          })
        }
        className="lesson-button"
      >
        OK!
      </button>
      <ChildNav />
    </div>
  );
}
