import './ChildNav.css'
import {useNavigate} from 'react-router-dom'

function ChildNav() {

  let navigate = useNavigate()
  function goHome(){
    //MVP
    navigate(`/child/dashboard`)

  }
  function goToLessons(){
    navigate(`/child/lesson`)
  }
  function goToWishlist(){
    //MVP/ICEBOX
    navigate(`/`)

  }

  return (
    <div className="childNav">
      <div onClick={goHome} className="nav-item" id="far-left-nav-img">
        <img src ="/left-nav-img.png"></img>
        <div className="nav-caption">Home</div>
      </div>
      {/* <div onClick={()=> `,{state: {lessonData}})} className="nav-item" id="center-nav-img"> */}
      <div onClick={goToLessons} className="nav-item" id="center-nav-img">
        <img src ="/middle-nav-img.png"></img>
        <div className="nav-caption">Learn</div>
      </div>
      <div onClick={goToWishlist} className="nav-item" id="far-right-nav-img">
        <img src ="/right-nav-img.png"></img>
        <div className="nav-caption">Wishlist</div>
      </div>


    </div>
  )
}

export default ChildNav