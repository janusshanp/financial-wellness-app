import "./ChildSignup.css"
import {Link} from "react-router-dom";
import {useRef, useState} from 'react'

export default function ChildSignUp(props){

    const [childUserData, setChildUserData] = useState({
        name: '',
        age: 8,
        avatar: '',
    })

    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)

    let topics = ['abc', 'kdjfs', 'sfdsfs']

    function handleChange(e){
        setChildUserData({...childUserData, [e.target.name]:e.target.value })
    }

    function avatarOnClick(e){
        let value = "../../images" + e.target.name
        setChildUserData({...childUserData, avatar:value })
    }

    function stepOneClick(){
        setStep1(false)
        setStep2(true)
    }

    function stepTwoClick(){
        setStep2(false)
        setStep3(true)
    }

    function stepThreeClick(){
        setStep3(false)
        setStep4(true)
    }

    function stepFourClick(){
        console.log('hi')
    }

    return(
        <div>
            {step1 ? 
            <div className="signup-steps">
                <h1 className="signup-header">What is your name?</h1>
                <input 
                    className="signup-name-input" 
                    placeholder="Enter Name"
                    onChange={handleChange}
                    value={childUserData.name} 
                    name="name" 
                />
                <img src={require('../../images/piggy_bank_questions.png')}></img>
                <button onClick={stepOneClick} className="signup-button">Continue</button>
                {topics.map((t) => t.name)}
            </div>
            :
            false
            }
            {step2 ?
            <div className="signup-steps">
                <h1 className="signup-header">How old are you?</h1>
                <div className="age-circle-container">
                    <div className="age-circle-row">
                        <div className="age-circle">4</div>
                        <div className="age-circle">5</div>
                        <div className="age-circle">6</div>
                    </div>
                    <div className="age-circle-row">
                        <div className="age-circle">7</div>
                        <div className="age-circle">8</div>
                        <div className="age-circle">9</div>
                    </div>
                    <div className="age-circle-row">
                        <div className="age-circle">10</div>
                        <div className="age-circle">11</div>
                        <div className="age-circle">12</div>
                    </div>
                    <button onClick={stepTwoClick} className="signup-button">Continue</button>
                </div>
            </div>
            :
            false         
            }

            {step3 ? 
            <div>
                <h1 className="signup-header">Choose a Character</h1>
                <div className="avatar-container">
                    <div className="avatar-line">
                        <img name="/avatar_dog.png" onClick={avatarOnClick} src={require('../../images/avatar_dog.png')}></img>
                        <img name="/avatar_duck.png"onClick={avatarOnClick} src={require('../../images/avatar_duck.png')}></img>
                        <img name="/avatar_gorilla.png" onClick={avatarOnClick} src={require('../../images/avatar_gorilla.png')}></img>                 
                    </div>
                    <div className="avatar-line">
                        <img name="/avatar_mouse.png" onClick={avatarOnClick} src={require('../../images/avatar_mouse.png')}></img>
                        <img name="/avatar_octopus.png"onClick={avatarOnClick} src={require('../../images/avatar_octopus.png')}></img>
                        <img name="/avatar_ostritch.png"onClick={avatarOnClick} src={require('../../images/avatar_ostritch.png')}></img>            
                    </div>
                    <div className="avatar-line">
                        <img name="/avatar_peacock.png"onClick={avatarOnClick} src={require('../../images/avatar_peacock.png')}></img>
                        <img name="/avatar_pink_dog.png"onClick={avatarOnClick} src={require('../../images/avatar_pink_dog.png')}></img>
                        <img name="/avatar_polar_bear.png"onClick={avatarOnClick} src={require('../../images/avatar_polar_bear.png')}></img>
                    </div>
                    <button onClick={stepThreeClick} className="signup-button">Continue</button>
                </div>

            </div>
            :
            false            
            }
        
            {step4 ?
            <div className="signup-steps">
                <h1>HOORAY! WELCOME TO THE CLUB, {childUserData.name}</h1>
                {/* <img src={require(childUserData.avatar)}></img> */}
                <h1>Are you ready to start the fun journey?</h1>
                <button onClick={stepFourClick}className="signup-button">Yes!</button>
            </div>
            :
            false         
            }


        </div>
    )
}


