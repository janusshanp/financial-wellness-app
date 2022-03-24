import "./LessonStory.css";
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import ChildNav from '../ChildNav/ChildNav'


export default function LessonStory(props) {
    const location = useLocation()
    const [lessonData, setLessonData] = useState(location.state.lessonData)

    let navigate = useNavigate()

    return (
    <div>
        <div>
            <h1>fsdfjksdjfl</h1>
            <p>{lessonData.lessonText}</p>
            {/* <img src={require('../../images/' + lessonData.imgUrl )}></img>
            <p>Help Piggy collect all the coins and Jackpot!</p>
            <img src={require('../../images/piggy_path_coins.png')}/>
            <br></br>
            <button 
                onClick={()=> navigate(`/lesson/${lessonData._id}/description`,{state: {lessonData}})}
                className="lesson-button"
            >OK!</button> */}
            <ChildNav/>
        </div>
    </div>
    
    )
}
