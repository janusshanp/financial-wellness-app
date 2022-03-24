import {useState} from 'react';
import {useNavigate, Link} from "react-router-dom";
import "./Login.css"

export default function Login(props) {
    const [userData, setUserData] = useState({
        email:'',
        password: '',
    })
    const [error, setError] = useState(false)

    let navigate = useNavigate()

    function handleChange(e){
        setUserData({...userData, [e.target.name]:e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('hit react function')
        const fetchResponse = await fetch('/api/users/login', {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
            })
        })
        if (!fetchResponse.ok){
            setError(true)
        }else {
            let token = await fetchResponse.json()
            localStorage.setItem('token', token)

            const userDoc = await JSON.parse(atob(token.split('.')[1])).user
            props.setUserInState(userDoc)
            navigate("/parent/dashboard")       
        }
    }

    return (
        <div>
            <p>Login Page</p>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <p>Username</p>
                <input
                    name="email"
                    value={userData.email} 
                    onChange={handleChange}  
                />
                <p>password</p>
                <input 
                    name="password"
                    value={userData.password}
                    onChange={handleChange}   
                />
                <button type='submit'>Submit</button>
                <p>Not a Member? &nbsp;<Link to="/signup">Signup here</Link></p>
            </form>
        </div>
    )
}