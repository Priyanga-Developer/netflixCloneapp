import React, { useState } from 'react'
import "./SignUpScreen.css"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth"
import {auth} from "../../firebase/config"

const SignUpScreen = () => {
  const [signIn ,setSignIn]=useState(true);
  const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");
  const [username,setUsername]=useState("");
  
  const signUpfunction=async()=>{ 
    try{
       await createUserWithEmailAndPassword(auth,email,password);    
      await updateProfile(auth.currentUser,{
        displayName: username
       })
     setEmail("");
     setPassword("");
     setUsername("");
    }
    catch(err){
      alert(err.message)
      setEmail("");
      setPassword("");
    }
  }

  const signInfunction=async()=>{
    try{
      await signInWithEmailAndPassword(auth,email,password);
    }
    catch(err){
      alert(err.message)
    }
  }
  return (
    <div className='signUpScreen'>
      {signIn?
      <>
      <form id="signInform" onClick={(e)=>e.preventDefault()}>
        <h1>Sign In</h1>
        <input 
            type="email"
            placeholder="Email"
            value={email}
            name="emailSignIn" 
            id="emailSignIn"
            onChange={(e)=>setEmail(e.target.value)}
          />
        <input 
            type="password" 
            placeholder="Password"
            value={password} 
            name="passwordSignIn" 
            id="passwordSignIn" 
            onChange={(e)=>setPassword(e.target.value)}

        />
         <button type="submit" onClick={(e)=>signInfunction(e)}>Sign In</button>
      </form>
      <h4>
        <span className='signUpScreen-gray'>New to Netflix? </span>{" "}
        <span className='signUpScreen-link'onClick={() => setSignIn(false)} >Sign Up Now</span>
      </h4>
      </>: <>
            <form id="signUpform"  onClick={(e)=>e.preventDefault()}>
            <h1>Sign up</h1>
            <input 
                type="text"
                placeholder="Enter your name"
                value={username}
                name="username" 
                id="username"
                onChange={(e)=>setUsername(e.target.value)}
              />
            
            <input 
                type="email"
                placeholder="Email"
                value={email}
                name="emailSignUp" 
                id="emailSignUp"
                onChange={(e)=>setEmail(e.target.value)}
              />
            <input 
                type="password" 
                placeholder="Password"
                value={password} 
                name="passwordSignUp" 
                id="passwordSignUp" 
                onChange={(e)=>setPassword(e.target.value)}
    
            />
             <button type="submit" onClick={()=>signUpfunction()}>Sign Up</button>
          </form>
          <h4>
            <span className='signUpScreen-gray'>Or have an account?</span>{" "}
            <span className='signUpScreen-link'onClick={() => setSignIn(true)} >Sign In</span>
          </h4>
          </>
}
    </div>
  )
}

export default SignUpScreen