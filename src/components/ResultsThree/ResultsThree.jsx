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
        <img src={require('../../images/great_job.png')} id="great-job"/>
            
            <p id="won">You have won $3!</p>
            <img src={require('../../images/piggy_with_coins_transparent.png')} id="piggy-with-coins-transparent"/>
            <br></br>
            <button 
            //MVP navigate update
                onClick={()=> navigate(`/child/dashboard`)}
                className="lesson-button"
            >Next</button>
            <ChildNav/>
        </div>
        
    </div>
    
    )
}
