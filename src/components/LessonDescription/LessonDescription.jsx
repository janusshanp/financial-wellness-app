import './LessonDescription.css'
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import ChildNav from '../ChildNav/ChildNav'
import ChildHeader from '../ChildHeader/ChildHeader';


export default function LessonDescription(props) {
    const location = useLocation()
    const [lessonData, setLessonData] = useState(location.state.lessonData)

    let navigate = useNavigate()

    return (
    <div>
        <ChildHeader childUser={props.childUser}/>
        <div className='lesson-description'>
            <div>
            <h1>{lessonData.title}</h1>
            <img src={require('../../images/' + lessonData.imgUrl )} className="description-image"></img>
            </div>
            <div className='description-wrapper'>
            <p id="description-text">{lessonData.description}</p>
            <button 
                onClick={()=> navigate(`/lesson/${lessonData._id}/story`,{state: {lessonData}})}
                className="lesson-big-button"
            >Let's go!</button> 
            </div>
            
        </div>
        <ChildNav/>
    </div>
    
    )
}
