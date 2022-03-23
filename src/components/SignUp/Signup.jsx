import './Signup.css'
import {useState, useEffect} from 'react';
import {Link ,useNavigate} from 'react-router-dom'

export default function SignUpForm(props){
    const [userData, setUserData] = useState({
        name:'',
        email: '',
        password: '',
        confirm: '',
        signup: true,
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
        if(userData.password.length >= 8){
            setPasswordValidation({...passwordValidation, length: true})
        } else {
            setPasswordValidation({...passwordValidation, length: false})
        }
        if(symbolMatch && numMatch){
            setPasswordValidation({...passwordValidation, numSymbol: true})
        } else {
            setPasswordValidation({...passwordValidation, numSymbol: false})
        }
    },[userData.password])

    useEffect(()=>{
        console.log('u')
        if(userData.password == userData.confirm && userData.password.length >= 8){
            console.log('hit')
            setPasswordValidation({...passwordValidation, confirm: true})
        }
    },[userData.confirm])

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
        // navigate("/account/setup")
        console.log()       
    }

    return (
        <div>
            <form autoComplete="off" onSubmit= {handleSubmit}>
                <h1>Create account</h1>
                <img src={require('../../images/parent.jpeg')}></img>
                <p>Name</p>
                <input name="name" onChange={handleChange} />
                <p>Email</p>
                <input name="email" onChange={handleChange} />
                <p>password</p>
                <input name="password" onChange={handleChange} />
                <p>confirm</p>
                <input name="confirm" onChange={handleChange} />
                {/* { errorFlag ?
                    <p className='error-red'>{errorMessage}</p> :
                    false
                } */}
                <p>Password must:</p>
                <div>
                    {passwordValidation.length ? 
                    <img src={require('../../images/signup_validation_complete.png')}></img>
                    : <img src={require('../../images/signup_validation_not_complete.png')}></img>
                    }
                    <p>Be at least 8 characters long</p>
                </div>
                <div>
                    {passwordValidation.confirm ? 
                    <img src={require('../../images/signup_validation_complete.png')}></img>
                    : <img src={require('../../images/signup_validation_not_complete.png')}></img>
                    }
                <p>Passwords should match</p>
                </div>
                <div>
                    {passwordValidation.numSymbol ? 
                    <img src={require('../../images/signup_validation_complete.png')}></img>
                    : <img src={require('../../images/signup_validation_not_complete.png')}></img>
                    }
                    <p>Include at least one number or symbol</p>
                </div>
                <button disabled={userData.signup} type="submit"> Continue </button>
                <p>Already a Member? &nbsp;<Link to="/login">Login here</Link></p>
            </form>
        </div>
    )
}
