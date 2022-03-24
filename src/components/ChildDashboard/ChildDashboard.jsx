import "./ChildDashboard.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";


export default function ChildDashboard(props){

    // const [activeNav, setActiveNav] = useState(false)
    // // const dashboardRef= useRef(null)

  
    let navigate = useNavigate()
    

    return(
        <div className="child-dashboard">
            <h1>Child Dashboard</h1>
        </div>
    )
}