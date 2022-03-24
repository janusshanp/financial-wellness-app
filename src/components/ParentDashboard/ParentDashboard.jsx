import "./ParentDashboard.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";
import ParentSideNav from "../ParentSideNav/ParentSideNav";

export default function ParentDashboard(props){

    const [activeNav, setActiveNav] = useState(false)
    // const dashboardRef= useRef(null)

    console.log(props.user.children)
    console.log(props.user.name)

    function closeNav(){
        if(activeNav){
            setActiveNav(false)
        }
    }

    let navigate = useNavigate()
    

    return(
        <div className="parent-dashboard" onClick={closeNav}>
            {activeNav ? <ParentSideNav name={props.user.name}/> : false}
            <div className="parent-header">
                <img 
                    onClick={()=>setActiveNav(true)}
                    src={require('../../images/parent.jpeg')}>
                </img>
                <p>Dashboard</p>           
            </div>
            <h1>Hello {props.user.name}!</h1>
            {props.user.children.length ?

            props.user.children.map(child => 
                <div className="child-box">
                    <img src={child.avatarUrl}></img>
                    <p>{child.name}</p>
                </div>
            )
            :
            <p>Add Children by clicking avatar</p>
            }

        </div>
    )
}