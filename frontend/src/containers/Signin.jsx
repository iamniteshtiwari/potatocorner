
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/common/Footer";
import { signIn } from "../reducks/users/operations";
import Header from '../components/common/Header'
import Items from "../components/common/Items";
import Background from "../components/common/Background";




const SignIn = () => {
    const dispatch = useDispatch();
  
    const [email, setEmail] = useState(""),
      [password, setPassword] = useState("");
  
    const inputEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const inputPassword = (event) => {
      setPassword(event.target.value);
    };
  
    const signInButton = (event) => {
      event.preventDefault();
      dispatch(signIn(email, password));
      setEmail("");
      setPassword("");
    };
    return (
        <>
<Header/>
<Background />
<Items/>
<section class="popup">
      <div class="popup-inner">
        <h1>SIGN IN</h1>
        <div class="popup-input">
          <input type="email" onChange={inputEmail} required placeholder="Email-address" value={email} />
          <br /><br />
          <input type="password" onChange={inputPassword} required placeholder="Password "value={password} />
          <br /> <br />
          <button onClick={signInButton}>SIGN IN</button>
          <p>Not a Member? <a href= "SignUp">Join Us</a></p>
          </div>
          </div>
    </section>

<Footer/>

        </>
    
    );
};

export default SignIn;
