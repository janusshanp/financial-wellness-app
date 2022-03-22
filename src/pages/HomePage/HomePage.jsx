import "./HomePage.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function HomePage(props){

    let navigate = useNavigate()

    function onClick(){
        navigate("/selectuser")  
    }

    return(
        <div className="home">
            <h1 className="landing-title">APP TITLE</h1>
            <p className="white-text">Teach your kids the value of money at a young age in a fun and engaging way!</p>
            <button onClick={onClick} className="home-button">Get Started</button>
            {/* <Link to="/login">Login here</Link>
            <Link to="/signup">Signup here</Link> */}
        </div>
    )
}