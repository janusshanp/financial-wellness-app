import "./ParentDashboard.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function ParentDashboard(props){

    console.log(props.user)
    let navigate = useNavigate()

    return(
        <div>
            <div className="parent-header">
                <img 
                    onClick={()=>navigate("/parent/switch")}
                    src={require('../../images/parent.jpeg')}>
                </img>
                <p>Dashboard</p>           
            </div>
            <h1>Hello {props.user.name}!</h1>
            {props.user.children.length ? 
            <div className="child-box">
                <img></img>
                <p>Jack</p>
            </div>
            :
            <p>Add Children by clicking avatar</p>
            }
        </div>
    )
}