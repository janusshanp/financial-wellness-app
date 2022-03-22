import "./SelectLesson.css";

function TopicList(props) {
    return (
        <div>
          <ul className='TopicList'>
          {props.topics.map(c => <li>{c}</li>)}
          </ul>
        </div>
    );
  }
  
  export default TopicList;