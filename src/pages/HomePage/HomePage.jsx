import "./HomePage.css"
import {Link} from "react-router-dom";
import {useRef, useState} from 'react'

export default function HomePage(props){

    return(
        <div className="home">
            <h1 className="landing-title">APP TITLE</h1>
            <button>Get Started</button>
            {/* <Link to="/login">Login here</Link>
            <Link to="/signup">Signup here</Link> */}
        </div>
    )
}