import './ChildNav.css'
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'

function ChildNav() {

  // const location = useLocation()
  // const [lessonData, setLessonData] = useState(location.state.lessonData)

  // let navigate = useNavigate()

  return (
    <div className="childNav">
      <div className="nav-item" id="far-left-nav-img">
        <img src ="/left-nav-img.png"></img>
        <div className="nav-caption">Home</div>
      </div>
      {/* <div onClick={()=> navigate(`/child/lessons`,{state: {lessonData}})} className="nav-item" id="center-nav-img"> */}
      <div className="nav-item" id="center-nav-img">
        <img src ="/middle-nav-img.png"></img>
        <div className="nav-caption">Learn</div>
      </div>
      <div className="nav-item" id="far-right-nav-img">
        <img src ="/right-nav-img.png"></img>
        <div className="nav-caption">Wishlist</div>
      </div>


      </div>
  )
}

export default ChildNav