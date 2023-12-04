import React from 'react'
import "./ProfileScreen.css"
import Nav from "../../components/Nav/Nav"
import Plans from '../../components/Plans/Plans'
import {useSelector} from "react-redux"
import {selectUser} from "../../features/users/userSlice"
import {signOut} from "firebase/auth"
import {auth} from "../../firebase/config"

const ProfileScreen = () => {

  const user=useSelector(selectUser);
  const logOut=()=>{
    signOut(auth)

  }

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreenbody'>
        <h1>Edit Profile</h1>
        <div className='profileScreenInfo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
          <div className='profileScreenDetails'>
            <h2><span>Hi,{user.name}!</span> <br/>
            <span>{user.email}</span></h2>
            <div className='profileScreenPlans'>
              <h3>Plans</h3>
              <Plans/>
              <button className='profileScreenSignOut' onClick={logOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen