import "./ChildSignup.css"
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from 'react'

export default function ChildSignUp(props){

    const [childUserData, setChildUserData] = useState({
        name: '',
        age: 8,
        avatar: '',
    })

    let navigate = useNavigate()

    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)

    let topics = ['abc', 'kdjfs', 'sfdsfs']

    function handleChange(e){
        setChildUserData({...childUserData, [e.target.name]:e.target.value })
    }

    function avatarOnClick(e){
        let avatars = document.getElementsByClassName('avatar-image')
        for(let i=0; i < avatars.length; i++){
           avatars[i].classList.remove('active')
        }
        e.target.classList.add('active')
        setChildUserData({...childUserData, avatar:e.target.src })
    }

    function stepOneClick(){
        setStep1(false)
        setStep2(true)
    }

    function stepTwoClick(){
        setStep2(false)
        setStep3(true)
    }

    async function stepThreeClick(){
        let jwt = localStorage.getItem('token')
        let fetchResponse = await fetch('/api/users/create/child',{
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + jwt,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: childUserData.name,
                age: childUserData.age,
                avatarUrl: childUserData.avatar
            })
        })
       if (fetchResponse.ok){
            let newUser = await fetchResponse.json()
            console.log(newUser)
            props.setChildUser(newUser)
            setStep3(false)
            setStep4(true)
       }else{
           console.log('error')
       }
    }

    function addActive(e){
        let circles = document.getElementsByClassName('age-circle')
        for(let i=0; i < circles.length; i++){
            circles[i].classList.remove('active')
        }
        e.target.classList.add('active')
        let number = parseInt(e.target.innerHTML)
        setChildUserData({...childUserData, age:number})
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
                        <div onClick={addActive}className="age-circle">4</div>
                        <div onClick={addActive} className="age-circle">5</div>
                        <div onClick={addActive}className="age-circle">6</div>
                    </div>
                    <div className="age-circle-row">
                        <div onClick={addActive}className="age-circle">7</div>
                        <div onClick={addActive}className="age-circle">8</div>
                        <div onClick={addActive}className="age-circle">9</div>
                    </div>
                    <div className="age-circle-row">
                        <div onClick={addActive}className="age-circle">10</div>
                        <div onClick={addActive}className="age-circle">11</div>
                        <div onClick={addActive}className="age-circle">12</div>
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
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_dog.png')}></img>
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_duck.png')}></img>
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_gorilla.png')}></img>                 
                    </div>
                    <div className="avatar-line">
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_mouse.png')}></img>
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_octopus.png')}></img>
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_ostritch.png')}></img>            
                    </div>
                    <div className="avatar-line">
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_peacock.png')}></img>
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_pink_dog.png')}></img>
                        <img className="avatar-image" onClick={avatarOnClick} src={require('../../images/avatar_polar_bear.png')}></img>
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
                <img src={childUserData.avatar}></img>
                {/* <img src={require('../../images/Test.png')}></img> */}
                <h1>Are you ready to start the fun journey?</h1>
                <button onClick={()=> navigate('/child/lesson')}className="signup-button">Yes!</button>
            </div>
            :
            false         
            }


        </div>
    )
}


