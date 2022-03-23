import "./TopicSelector.css";
import {useNavigate} from 'react-router-dom'


function TopicSelector(props) {

  let navigate = useNavigate()
  let data = props.topicData

  return (
  <div onClick={()=>navigate(`/lesson/${data._id}`,{state: {data}})} className="topicSelector">
      <img src={props.imgUrl}></img>
      <p>{props.title}</p>
  </div>
  )
}

export default TopicSelector;
