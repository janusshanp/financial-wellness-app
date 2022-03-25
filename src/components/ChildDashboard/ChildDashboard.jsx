import "./ChildDashboard.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";
import ChildNav from "../ChildNav/ChildNav";
import ChildHeader from "../ChildHeader/ChildHeader";

export default function ChildDashboard(props){

    // const [activeNav, setActiveNav] = useState(false)
    // // const dashboardRef= useRef(null)

  
    let navigate = useNavigate()
    

    return(
        <div>
            <ChildHeader/>
            <div className="child-dashboard">
                <h1 className="dash-title">Hello ! {props.childUser.name}</h1>
                <div className="piggy-container">
                    <img src={require('../../images/piggy_child_dashboard.png')}></img>
                    <p>Balance: ${props.childUser.totalBalance}</p>
                </div>
                <button onClick={()=> navigate("/child/lesson")}className="dash-button">I want to collect coins!</button>
                <ChildNav/>
            </div>
        </div>
    )
}