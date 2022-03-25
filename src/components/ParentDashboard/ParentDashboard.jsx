import "./ParentDashboard.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";
import ParentSideNav from "../ParentSideNav/ParentSideNav";

export default function ParentDashboard(props){

    const [activeNav, setActiveNav] = useState(false)
    // const dashboardRef= useRef(null)

    // console.log(props.user.children)
    // console.log(props.user.name)

    async function closeNav(){
        // console.log('clse')
        // const els = await document.getElementsByClassName('parent-side-nav')
        // let el = els[0]
        // el.classList.remove('active')
    }

    async function openNav(){
        const els = await document.getElementsByClassName('parent-side-nav')
        let el = els[0]
        el.classList.add('active')
    }

    let navigate = useNavigate()
    

    return(
        <div className="parent-dashboard" onClick={closeNav}>
            <ParentSideNav name={props.user.name}/>
            {/* {activeNav ? <ParentSideNav name={props.user.name}/> : false} */}
            <div className="parent-header">
                <img 
                    className="parent-img"
                    onClick={openNav}
                    src={require('../../images/parent.jpeg')}>
                </img>
                <p>Hello, {props.user.name}!</p>           
            </div>
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