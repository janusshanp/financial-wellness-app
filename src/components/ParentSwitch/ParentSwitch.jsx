import "./ParentSwitch.css"
import {useRef, useState, useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function ParentSwitch(props){

    let navigate = useNavigate()
    console.log(props.user)

    useEffect(()=>{
        console.log(props.user.children)
    })

    function childSwitch(child){
        props.setChildUser(child)
        navigate("/child/dashboard")
    }

    return(
        <div className="switch-view">
            Choose Account
            <div className="switch-icons-container">
                <div>
                    <img src={require('../../images/parent.jpeg')}></img>
                    <p>{props.user.name}</p>
                </div>
                {props.user.children.length ?
                props.user.children.map(child => 
                    <div onClick={() => childSwitch(child)}className="child-switch-avatar">
                        <img src={child.avatarUrl}></img>
                        <p>{child.name}</p>
                    </div>
                ) : false }
                <div>
                    <img onClick={()=> navigate("/child/signup")}src={require('../../images/add_child_button.png')}></img>
                    <p>Add a child</p>
                </div>
            </div>
        </div>
    )
}