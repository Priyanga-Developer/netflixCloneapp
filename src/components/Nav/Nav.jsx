import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { Link} from "react-router-dom"

const Nav = () => {

  const [show,setShow]=useState(false);
  
  const transitionNavBar=()=>{
    if(window.scrollY>100){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  })

  return (
    <nav className={`nav ${show&&"nav-black"}`}>
      <div className='nav-contents'>
        <Link to="/">
              <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo"
              className='nav-logo' />
        </Link>
        <Link to="/profile">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="login-avatar"
            className="nav-avatar"
          />
        </Link>
      </div>
    </nav>
  )
}

export default Nav