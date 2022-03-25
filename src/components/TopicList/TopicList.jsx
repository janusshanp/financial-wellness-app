import "./TopicList.css";
import { useEffect, useState } from "react";
import TopicSelector from "../TopicSelector/TopicSelector";
import ChildNav from "../ChildNav/ChildNav"
import ChildHeader from "../ChildHeader/ChildHeader";

function TopicList(props) {
  const [topics, setTopics] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("/api/topics");
      let topicData = await data.json();
      setTopics(topicData)
    }
    fetchData()
  },
  []);

  return (
    <div className="topic-page">
      <ChildHeader childUser={props.childUser}/>
      <h1>What do you want to learn today?</h1>
      {/* <img src={require('../../images/' + topics[1].imgUrl)}></img> */}
        {topics ?
        <div className="TopicList">
          {topics.map((c) => (
            <TopicSelector title={c.title} imgUrl={require('../../images/' + c.imgUrl )} topicData={c}/>
          ))}
        </div>
      : false}
      <ChildNav/>
    </div>
  );
}

export default TopicList;
