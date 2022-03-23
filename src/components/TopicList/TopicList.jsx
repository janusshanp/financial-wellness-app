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
      <h1>Topics</h1>
      <ul className="TopicList">
        {topics ?
        <div>
          {topics.map((c) => (
            <TopicSelector title={c.title} imgUrl={c.imgUrl} />
          ))}
          </div>
      : false}
      </ul>
    </div>
  );
}

export default TopicList;
