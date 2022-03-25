import "./ChildSideNav.css"
import {useRef, useState,useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function ChildSideNav(props){

    let navigate = useNavigate()

    function logout(){
        localStorage.removeItem('token')
        navigate("/")
    }
    
    async function closeNav(){
        const els = await document.getElementsByClassName('child-side-nav')
        let el = els[0]
        el.classList.remove('active')
    }

    return(
        <div className="child-side-nav">
            <div className="child-side-nav-top">
                <img src={require('../../images/parent.jpeg')}></img>
                <div>
                    Name of Child
                </div>
            </div>
            <div className="border-bottom"></div>
            <div className="child-side-nav-middle" onClick={()=>navigate("/parent/switch")}>
                <img className="icons-child-nav" src={require('../../images/change_user_button.png')}></img>
                Switch Account
            </div>
            <div className="parent-side-nav-middle" >
                <img className="icons-child-nav" src={require('../../images/settings_button.png')}></img>
                Settings
            </div>
            <div className="border-bottom"></div>
            <div onClick={logout}className="logout">
                <img className="icons-child-nav" src={require('../../images/logout_button.png')}></img>
                Logout
            </div>
            <img onClick={closeNav} className='chevron icons-child-nav' src={require('../../images/chevron.png')}></img>
        </div>
    )
}