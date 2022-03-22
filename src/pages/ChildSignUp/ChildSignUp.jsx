import "./ChildSignup.css"
import {Link} from "react-router-dom";
import {useRef, useState} from 'react'

export default function ChildSignUp(props){

    const [childUserData, setchildUserData] = useState({
        name: '',
        age: 8,
        avatar: '',



    })

    function childOnClick(){
        <Link to="/child/signup">Signup here</Link>
    }

    return(
        <div className="child-signup">
            <h1>What is your name?</h1>
            <input className="signup-name-input" placeholder="name" name="name"></input>
            <img src={require('../../images/piggy_with_coins.jpeg')}></img>
            <h1>How old are you?</h1>
            <div className="age-circle-container">
                <div className="age-circle">8</div>
                <div className="age-circle">9</div>
                <div className="age-circle">10</div>
                <div className="age-circle">11</div>
                <div className="age-circle">12+</div>
            </div>

        </div>
    )
}