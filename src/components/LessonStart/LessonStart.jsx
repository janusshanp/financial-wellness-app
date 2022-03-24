import "./LessonStart.css";
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import ChildNav from '../ChildNav/ChildNav'


export default function LessonStart(props) {
    const location = useLocation()
    const [lessonData, setLessonData] = useState(location.state.data)

    let navigate = useNavigate()

    return (
    <div>
        <div className="lesson-start">
            <h1>{lessonData.title}</h1>
            <img src={require('../../images/' + lessonData.imgUrl )}></img>
            <p>Help Piggy collect all the coins and Jackpot!</p>
            <img src={require('../../images/piggy_path_coins.png')} id="piggy-coins"/>
            <br></br>
            <button 
                onClick={()=> navigate(`/lesson/${lessonData._id}/description`,{state: {lessonData}})}
                className="lesson-button"
            >OK!</button>
            <ChildNav/>
        </div>
        
    </div>
    
    )
}
