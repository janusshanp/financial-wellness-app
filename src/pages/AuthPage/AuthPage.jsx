import "./AuthPage.css"
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from 'react'

export default function AuthPage(props){

    const [childLogin, setchildLogin] = useState(false)

    let navigate = useNavigate()

    function childOnClick(){
        navigate("/child/signup")
    }

    return(
        <div className="authorization">
            <p className="white-text">Continue as a ...</p>
            <div className="user-select">
                <img src={require('../../images/parent.jpeg')}></img>
                <p>Parent</p>
            </div>
            <div onClick={childOnClick}className="user-select">
                <img src={require('../../images/child_image.jpeg')}></img>
                <p>Child</p>
            </div>


        </div>
    )
}

