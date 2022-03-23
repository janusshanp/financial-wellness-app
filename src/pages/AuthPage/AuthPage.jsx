import "./AuthPage.css"
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from 'react'

export default function AuthPage(props){

    const [childLogin, setchildLogin] = useState(false)

    let navigate = useNavigate()

   
    return(
        <div className="authorization">
            <p className="white-text">Continue as a ...</p>
            <div onClick={() => navigate("/parent/signup")} className="user-select">
                <img src={require('../../images/parent.jpeg')}></img>
                <p className="continue-text">Parent</p>
            </div>
            <div onClick={() => navigate("/child/signup")}className="user-select">
                <img src={require('../../images/child_image.jpeg')}></img>
                <p className="continue-text">Child</p>
            </div>
        </div>
    )
}

