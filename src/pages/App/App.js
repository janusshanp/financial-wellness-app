import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import {useState} from 'react'
import Login from '../../components/Login/Login.jsx'
import SignUpForm from '../../components/SignUp/Signup'
import HomePage from '../HomePage/HomePage';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  function setUserInState(incomingUserData){
    setLoggedInUser(incomingUserData)
  }

  return (
    <div className="App">
      <p>App Page is loading!!!!!!!!</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login setUserInState={setUserInState}/>}/>
          <Route path="/signup" element={<SignUpForm setUserInState={setUserInState}/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
