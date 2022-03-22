import "./HomePage.css"
import {Link} from "react-router-dom";
import {useRef, useState} from 'react'

export default function HomePage(props){

    return(
        <div className="home">
            <p>Homepage</p>
            <Link to="/camera">Take Photo</Link>
            <Link to="/login">Login here</Link>
            <Link to="/signup">Signup here</Link>
        </div>
    )
}