import "./ParentSideNav.css"
import {useRef, useState,useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function ParentSideNav(props){

    let navigate = useNavigate()

    function logout(){
        localStorage.removeItem('token')
        navigate("/")
    }
    
    async function closeNav(){
        const els = await document.getElementsByClassName('parent-side-nav')
        let el = els[0]
        el.classList.remove('active')
    }

    return(
        <div className="parent-side-nav">
            <div className="parent-side-nav-top">
                <img src={require('../../images/parent.jpeg')}></img>
                <div>
                    {props.name}
                </div>
            </div>
            <div className="border-bottom"></div>
            <div className="parent-side-nav-middle" onClick={()=>navigate("/parent/switch")}>
                <img src={require('../../images/change_user_button.png')}></img>
                Switch Account
            </div>
            <div className="parent-side-nav-middle" >
                <img src={require('../../images/settings_button.png')}></img>
                Settings
            </div>
            <div className="border-bottom"></div>
            <div onClick={logout}className="logout">
                <img src={require('../../images/logout_button.png')}></img>
                Logout
            </div>
            <img onClick={closeNav} className='chevron' src={require('../../images/chevron.png')}></img>
        </div>
    )
}