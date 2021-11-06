import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";
import Items from '../components/common/Items';
import Background from '../components/common/Background';


export default function SignUp() {
  const dispatch = useDispatch();
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  

    return (
        <>
            <Header />
            <Background />

            <Items />
            <section class="popup">
                <div class="popup-inner">
                    <h2>SIGN UP</h2>
                    <div class="popup-input">
                        <input type="name " onChange={inputUserName} required placeholder="Name" value={user_name} />
                        <br />
                        <br />
                        <input type="email" onChange={inputEmail} required placeholder="Email-address" value={email} />
                        <br />
                        <br />
                        <input
                            type="password"
                            onChange={inputPassword}
                            required
                            placeholder="Password "
                            value={password}
                        />
                        <br /> <br />
                        <button onClick={signUpButton}>SIGN UP</button>
                        <p>
                            Already a Member? <a href="SignIn">sign in</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
