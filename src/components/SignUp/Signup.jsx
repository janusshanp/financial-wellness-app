import './Signup.css'
import {useState} from 'react';
import {Link ,useNavigate} from 'react-router-dom'

export default function SignUpForm(props){
    const [userData, setUserData] = useState({
        name:'',
        email: '',
        username:'',
        password: '',
        confirm: '',
        signup: false,
    })
    //use for errorhandling 
    const [errorFlag, setErrorFlag] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    let navigate = useNavigate()

    function handleChange(e){
        setUserData({...userData, [e.target.name]:e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const fetchResponse = await fetch('/api/users/signup', {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: userData.name, 
                email: userData.email, 
                username: userData.username,
                password: userData.password,
            })
        })
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
        let token = await fetchResponse.json()
        localStorage.setItem('token', token)
        const userDoc = await JSON.parse(atob(token.split('.')[1])).user
        props.setUserInState(userDoc)
        navigate("/account/setup")       
    }

    return (
        <div>
            <form autoComplete="off" onSubmit= {handleSubmit}>
                <p>Name</p>
                <input 
                    name="name" 
                    onChange={handleChange} 
                >
                </input>
                <p>Username</p>
                <input 
                    name="username" 
                    onChange={handleChange}  
                >
                </input>
                <p>Email</p>
                <input 
                    name="email" 
                    onChange={handleChange}  
                >
                </input>
                <p>password</p>
                <input 
                    name="password"
                    onChange={handleChange}  
                >
                </input>
                <p>confirm</p>
                <input 
                    name="confirm" 
                    onChange={handleChange}  
                >
                </input>
                { errorFlag ?
                    <p className='error-red'>{errorMessage}</p> :
                    false
                }
                <button
                    disabled={userData.signup} 
                    type="submit"
                >Submit
                </button>
                <p>Already a Member? &nbsp;<Link to="/account/login">Login here</Link></p>
            </form>
        </div>
    )
}