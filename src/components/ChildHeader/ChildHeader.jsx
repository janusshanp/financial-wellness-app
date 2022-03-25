import "./ChildHeader.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";
import ChildSideNav from "../ChildSideNav/ChildSideNav";

export default function ChildHeader(props){

    let navigate = useNavigate()

    async function openNav(){
        const els = await document.getElementsByClassName('child-side-nav')
        let el = els[0]
        el.classList.add('active')
    }
    console.log(props.childUser)
    console.log(props.childUser.avatarUrl)

    return(
        <div className="child-header">
            <ChildSideNav childUser={props.childUser}/>
            {/* <img onClick={openNav} className="child-header-avatar"src={require(`../../images/avatar_pink_dog.png`)}></img> */}
            <img onClick={openNav} className="child-header-avatar"src={props.childUser.avatarUrl}></img>
            <img className="child-header-fire"src={require('../../images/fire_streak.png')}></img>
                <div className="streak-number">
                    {props.childUser.streak}
                </div>
        </div>
    )
}