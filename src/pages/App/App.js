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
import ParentSignUp from '../ParentSignUp/ParentSignUp';
import LessonStart from '../../components/LessonStart/LessonStart'
import LessonDescription from '../../components/LessonDescription/LessonDescription';
import LessonStory from '../../components/LessonStory/LessonStory';
import ParentDashboard from '../../components/ParentDashboard/ParentDashboard';
import ParentSwitch from '../../components/ParentSwitch/ParentSwitch';
import ResultsOne from '../../components/ResultsOne/ResultsOne';
import ResultsTwo from '../../components/ResultsTwo/ResultsTwo';
import ResultsThree from '../../components/ResultsThree/ResultsThree';
import ChildDashboard from '../../components/ChildDashboard/ChildDashboard';


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)
  const [childUser, setChildUser] = useState(null)

  function setUserInState(incomingUserData){
    console.log('hit')
    setLoggedInUser(incomingUserData)
  }

  function setChildUserInState(incomingUserData){
    setChildUser(incomingUserData)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setUserInState={setUserInState}/>}/>
          {/* <Route path="/selectuser" element={<AuthPage />}/> */}
          <Route path="/login" element={<Login setUserInState={setUserInState}/>}/>

          <Route path="/nav" element = {<ChildNav />} />
          <Route path="/quiz" element = {<Quiz childUser={childUser} setChildUser={setChildUserInState}/>} />

          <Route path="/parent/signup" element={<ParentSignUp setUserInState={setUserInState}/>} />
          <Route path="/parent/dashboard" element={<ParentDashboard user={loggedInUser}/>} />
          <Route path="/parent/switch" element={<ParentSwitch setChildUser={setChildUserInState} user={loggedInUser}/>} />
          <Route path="/child/signup" element={<ChildSignUp setChildUser={setChildUserInState} setUserInState={setUserInState}/>} />
          <Route path="/child/dashboard" element={<ChildDashboard childUser={childUser} />} />
          <Route path="/lesson/:lessonId" element={<LessonStart/>} />
          <Route path="/lesson/:lessonId/description" element={<LessonDescription/>} />
          <Route path="/lesson/:lessonId/story" element={<LessonStory/>} />
          {/* <Route path="/lesson/:lessonId/quiz" element={<LessonStart/>} /> */}
          <Route path="/child/lesson" element={<TopicList/>} />
          <Route path="/results/one" element={<ResultsOne/>} />
          <Route path="/results/two" element={<ResultsTwo/>} />
          <Route path="/results/three" element={<ResultsThree/>} />
          <Route path="/signup" element={<SignUpForm/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
