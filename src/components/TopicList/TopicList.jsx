import React from "react";
import "./TopicList.css";
import { useEffect, useState } from "react";
import TopicSelector from "../TopicSelector/TopicSelector";

function TopicList() {
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
    <div>
      <h1>What do you want to learn today?</h1>
      
        {topics ?
        <div className="TopicList">
          {topics.map((c) => (
            <TopicSelector title={c.title} imgUrl={c.imgUrl} />
          ))}
          </div>
      : false}
    </div>
  );
}

export default TopicList;
