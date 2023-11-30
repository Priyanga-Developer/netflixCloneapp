import './App.css';
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import HomeScreen from './pages/HomeScreen/HomeScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';

function App() {
  const user=null;
  return (
    <div className="App">
      <Router>
        {
          !user?<LoginScreen/>:
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/profile' element={<ProfileScreen/>}/>
          </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
