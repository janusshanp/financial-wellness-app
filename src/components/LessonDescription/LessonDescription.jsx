import './LessonDescription.css'
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import ChildNav from '../ChildNav/ChildNav'


export default function LessonDescription(props) {
    const location = useLocation()
    const [lessonData, setLessonData] = useState(location.state.lessonData)

    let navigate = useNavigate()

    return (
    <div>
        <div>
            <h1>{lessonData.title}</h1>
            <img src={require('../../images/' + lessonData.imgUrl )}></img>
            <p>{lessonData.description}</p>
            <button 
                onClick={()=> navigate(`/lesson/${lessonData._id}/story`,{state: {lessonData}})}
                className="lesson-big-button"
            >Let's go!</button> 
            <ChildNav/>
        </div>
    </div>
    
    )
}
