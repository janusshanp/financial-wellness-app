import "./ParentSwitch.css"
import {useRef, useState, useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom";

export default function ParentSwitch(props){

    let navigate = useNavigate()
    console.log(props.user)

    useEffect(()=>{
        console.log(props.user.children)
    })

    return(
        <div>
            <div>
                <img src={require('../../images/parent.jpeg')}></img>
                <p>{props.user.name}</p>
            </div>
            {props.user.children.length ? 
            <div>
                <img></img>
            </div>
            :
            false
            }
            <div>
                <img onClick={()=>navigate("/child/signup")}src={require('../../images/add_child_button.png')}></img>
                <p>Add a child</p>
            </div>
        </div>
    )
}