import './Signup.css'
import {useState, useEffect} from 'react';
import {Link ,useNavigate} from 'react-router-dom'

export default function SignUpForm(props){
    const [userData, setUserData] = useState({
        name:'',
        email: '',
        password: '',
        confirm: '',
        signup: false,
    })
    const [passwordValidation, setPasswordValidation] = useState({
        length: false,
        confirm: false,
        numSymbol: false,
    })

  
    //use for errorhandling 
    const [errorFlag, setErrorFlag] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    let navigate = useNavigate()

    useEffect(()=>{
        let regexSymbol = new RegExp("^(?=.*[!@#$%^&*])")
        let regexNum = new RegExp("^(?=.*[0-9])")
        let symbolMatch = userData.password.match(regexSymbol)
        let numMatch = userData.password.match(regexNum)
        let value = {...passwordValidation}
        if(userData.password.length >= 8){
            value.length = true
            setPasswordValidation(value)
        } else {
            value.length = false
            setPasswordValidation(value)
        }
        if(symbolMatch && numMatch){
            value.numSymbol = true
            setPasswordValidation(value)
        } else {
            value.numSymbol = false
            setPasswordValidation(value)
        }
        if(userData.password == userData.confirm && userData.password.length >= 8){
            value.confirm = true
            setPasswordValidation(value)
        } else {
            value.confirm = false
            setPasswordValidation(value)
        }
    },[userData.password, userData.confirm])

    function handleChange(e){
        setUserData({...userData, [e.target.name]:e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const fetchResponse = await fetch('/api/users/parent/signup', {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: userData.name, 
                email: userData.email, 
                password: userData.password,
            })
        })
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
        let token = await fetchResponse.json()
        localStorage.setItem('token', token)
        const userDoc = await JSON.parse(atob(token.split('.')[1])).user
        props.setUserInState(userDoc)
        navigate("/parent/dashboard")     
    }

    return (
        <div className='signup-page'>
            <form autoComplete="off" onSubmit= {handleSubmit}>
                <h1 className='signup-title'>Create account</h1>
                <img src={require('../../images/parent.jpeg')}></img>
                <h1 className='signup-title'>Parent</h1>
                <div>
                    <input placeholder="Name" name="name" onChange={handleChange} />
                    <input placeholder="Email" name="email" onChange={handleChange} />
                    <input placeholder="Password" name="password" onChange={handleChange} />
                    <input placeholder="Confirm Password"name="confirm" onChange={handleChange} />
                    <p>Password must:</p>
                    <div className='pass-validation'>
                        {passwordValidation.length ? 
                        <img src={require('../../images/signup_validation_complete.png')}></img>
                        : <img src={require('../../images/signup_validation_not_complete.png')}></img>
                        }
                        <p>Be at least 8 characters long</p>
                    </div>
                    <div className='pass-validation'>
                        {passwordValidation.confirm ? 
                        <img src={require('../../images/signup_validation_complete.png')}></img>
                        : <img src={require('../../images/signup_validation_not_complete.png')}></img>
                        }
                    <p>Passwords should match</p>
                    </div>
                    <div className='pass-validation'>
                        {passwordValidation.numSymbol ? 
                        <img src={require('../../images/signup_validation_complete.png')}></img>
                        : <img src={require('../../images/signup_validation_not_complete.png')}></img>
                        }
                        <p>Include at least one number or symbol</p>
                    </div>
                </div>
                <button className="signup-button" disabled={userData.signup} type="submit"> Continue </button>
                <p>Already a Member? &nbsp;<Link to="/login">Login here</Link></p>
            </form>
        </div>
    )
}
