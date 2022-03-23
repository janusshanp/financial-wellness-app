import "./LessonStart.css";
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'


export default function LessonStart(props) {
    const location = useLocation()
    const [lessonData, setLessonData] = useState(location.state.data)

    return (
    <div>
        <h1>{lessonData.title}</h1>
        <img src={require('../../images/' + lessonData.imgUrl )}></img>
        <p>Help Piggy collect all the coins and Jackpot!</p>
        <img src={require('../../images/piggy_collecting_coins_1.svg')}/>
        <button>OK!</button>
    </div>
    )
}
