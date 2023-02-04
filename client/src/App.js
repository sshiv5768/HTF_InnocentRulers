import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom/dist';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
