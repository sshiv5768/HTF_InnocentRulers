import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom/dist';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import NewHackathon from "./screens/NewHackathon";
import { useState, useEffect } from 'react';
import DashBoard from './screens/DashBoard';


function App() {
  const [isLogin,setisLogin] = useState();
  useEffect(()=>{

  },[isLogin])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen isLogin={isLogin} setisLogin={setisLogin}/>}/>
          <Route path="/login" element={<LoginScreen isLogin={isLogin} setisLogin={setisLogin}/>} />
          <Route path="/home" element={<MainScreen/>} isLogin={isLogin}/>
          <Route path="/newhackathon" element={<NewHackathon/>} isLogin={isLogin}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
