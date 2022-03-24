import "./ResultsThree.css";
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import ChildNav from '../ChildNav/ChildNav'


export default function ResultsThree(props) {
    const location = useLocation()
    // const [lessonData, setLessonData] = useState(location.state.data)

    let navigate = useNavigate()

    return (
    <div>
        <div className="lesson-start">
            <h1>OinkOink!</h1>
            <p>I love coins</p>
            <img src={require('../../images/piggy_with_coins_transparent.png')} id="piggy-with-coins-transparent"/>
            <br></br>
            <button 
                onClick={()=> navigate(`/lesson/${lessonData._id}/description`,{state: {lessonData}})}
                className="lesson-button"
            >Next</button>
            <ChildNav/>
        </div>
        
    </div>
    
    )
}
