import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import HomeScreen from './pages/HomeScreen/HomeScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import {useDispatch, useSelector} from"react-redux";
import { selectUser } from './features/users/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { login,logout } from './features/users/userSlice';
import { auth } from './firebase/config';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  console.log(user);
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          userID:userAuth.uid,
          email:userAuth.email,
          name:userAuth.displayName
        }))
      }
      else{
        dispatch(logout())
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  },[])
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
