import React from "react";
import "./TopicList.css";
import { useEffect, useState } from "react";
import TopicSelector from "../TopicSelector/TopicSelector";
import ChildNav from "../ChildNav/ChildNav"

function TopicList() {
  const [topics, setTopics] = useState(false)

  let str = 'spending_1.png'

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
    <div>
      <h1>What do you want to learn today?</h1>
      {/* <img src={require('../../images/' + topics[1].imgUrl)}></img> */}
        {topics ?
        <div className="TopicList">
          {topics.map((c) => (
            <TopicSelector title={c.title} imgUrl={require('../../images/' + c.imgUrl )} />
          ))}
        </div>
      : false}
      <ChildNav/>
    </div>
  );
}

export default TopicList;
