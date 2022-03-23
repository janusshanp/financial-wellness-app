import "./ParentSignUp.css"
import {useRef, useState} from 'react'
import {useNavigate, Link} from "react-router-dom";
import SignUpForm from '../../components/SignUp/Signup'

export default function ParentSignUp(props){

    let navigate = useNavigate()

    // function onClick(){
    //     navigate("/selectuser")  
    // }

    return(
        <div>
            <SignUpForm/>
        </div>
    )
}