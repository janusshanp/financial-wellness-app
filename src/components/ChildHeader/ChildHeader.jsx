import "./ChildHeader.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function ChildHeader(props){

    let navigate = useNavigate()

    return(
        <div className="child-header">
            <img className="child-header-avatar"src={require('../../images/avatar_pink_dog.png')}></img>
            <img className="child-header-fire"src={require('../../images/fire_streak.png')}></img>
        </div>
    )
}