import './App.css';
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import HomeScreen from './pages/HomeScreen/HomeScreen';

function App() {
  const user="jd";
  return (
    <div className="App">
      <Router>
        {
          !user?<h1>Login Screen</h1>:
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
          </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
