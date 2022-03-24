import "./ParentSideNav.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function ParentSideNav(props){

    let navigate = useNavigate()

    function logout(){
        localStorage.removeItem('token')
        navigate("/")
    }

    return(
        <div className="parent-side-nav">
            <div className="parent-side-nav-top">
                <img src={require('../../images/parent.jpeg')}></img>
                {props.name}
            </div>
            <div className="parent-side-nav-middle" onClick={()=>navigate("/parent/switch")}>
                <img src={require('../../images/change_user_button.png')}></img>
                Switch Account
            </div>
            <div onClick={logout}className="logout">
                <img src={require('../../images/logout_button.png')}></img>
                Logout
            </div>
            <img className='chevron' src={require('../../images/chevron.png')}></img>
        </div>
    )
}