import "./Lesson.css";
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'


export default function Lesson(props) {

    const location = useLocation()
    const [lessonData, setLessonData] = useState(location.state.data)

    return (
    <div>
        <h1>{storyData.title}</h1>
        <img src={require('../../images/' + storyData.imgUrl )}></img>
        <p>{storyData.story}</p>
        <button>OK!</button>
    </div>
    )
}
