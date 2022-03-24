import "./ResultsTwo.css";
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import ChildNav from '../ChildNav/ChildNav'


export default function ResultsTwo(props) {
    const location = useLocation()
    // const [lessonData, setLessonData] = useState(location.state.data)

    let navigate = useNavigate()

    return (
    <div>
        <div className="lesson-start">
            <h1>OinkOink!</h1>
            <p>I love coins</p>
            <img src={require('../../images/pig_collected_a_coin.png')} id="piggy-collected-coin"/>
            <br></br>
            <button 
                onClick={()=> navigate(`/results/three`)}
                className="lesson-button"
            >Next</button>
            <ChildNav/>
        </div>
        
    </div>
    
    )
}
