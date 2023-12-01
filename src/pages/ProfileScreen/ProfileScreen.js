import React from 'react'
import "./ProfileScreen.css"
import Nav from "../../components/Nav/Nav"
import {useSelector} from "react-redux"
import {selectUser} from "../../features/userSlice"

const ProfileScreen = () => {
  const user=useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreenbody'>
        <h1>Edit Profile</h1>
        <div className='profileScreenInfo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
          <div className='profileScreenDetails'>
            <h2>{user.email}</h2>
            <div className='profileScreenPlans'>
              <h3>Plans</h3>
              {/* <Plans/> */}
              <button className='profileScreenSignOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen