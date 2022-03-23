import React from "react";
import "./TopicSelector.css";

function TopicSelector(props) {
  return (
  <div className="topicSelector">
      <img src={require(`/${props.imgUrl}`)} alt="ddd" />
      <p>{props.title}</p>
      

  </div>
  )
}

export default TopicSelector;
