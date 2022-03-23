import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {useState} from 'react'
import Login from '../../components/Login/Login.jsx'
import SignUpForm from '../../components/SignUp/Signup'
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import ChildSignUp from '../ChildSignUp/ChildSignUp';
import CameraPage from "../Camera/Camera";
import TopicList from '../../components/TopicList/TopicList';
import ChildNav from '../../components/ChildNav/ChildNav';
import Quiz from '../Quiz/Quiz';

function App() {
  const questions = [
    {
      question:"What should you do?",
      answers:['Spend', 'Save', 'Budget', 'Invest'],
      correctAnswer:'Invest',
      explanation: "Investing is just the right thing to do"
    },
    {
      question:"Who should you invest in?",
      answers:['Tesla', 'GME', 'Yourself', 'This hackathon'],
      correctAnswer:'Tesla',
      explanation: 'Lowest rated EV, highest rated sigma male'
    },
    {
      question:"What is antiwork?",
      answers:['Not the move', 'Definitely the move', 'Move to a cheaper location', 'Move your body to the rythm'],
      correctAnswer:'Invest',
      explanation: 'just move your body'
    }]

  const [loggedInUser, setLoggedInUser] = useState(null)

  function setUserInState(incomingUserData){
    setLoggedInUser(incomingUserData)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage user={loggedInUser}/>}/>
          <Route path="/selectuser" element={<AuthPage />}/>
          <Route path="/login" element={<Login setUserInState={setUserInState}/>}/>

          <Route path="/nav" element = {<ChildNav />} />
          <Route path="/quiz" element = {<Quiz questions = {questions}/>} />


          <Route path="/child/signup" element={<ChildSignUp/>} />
          <Route path="/child/lesson" element={<TopicList/>} />
          <Route path="/signup" element={<SignUpForm setUserInState={setUserInState}/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
