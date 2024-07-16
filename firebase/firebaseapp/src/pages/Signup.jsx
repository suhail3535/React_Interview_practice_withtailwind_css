import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import logo from "../assets/google.jpg";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((user) =>
      console.log(user)
    );
    setEmail("");
    setPassword("");
  };
  const signupwithgoogle = () => {
    signInWithPopup(auth, provider).then((user) => {
      const userData = user.user;
      setUser(userData.email); // Or any other property you want to display

      console.log(userData.displayName, "user UID");
      console.log(user, "login success");
    });
  };
  return (
    <div>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="email"
      />

      <label>password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="password"
      />
      <button onClick={registerUser}>Submit</button>
      <br />
      <button onClick={signupwithgoogle}>
        <div>
          <img style={{ width: "10%" }} src={logo} alt="google" />
        </div>
      </button>
      <div>
        {user && <h1>{user.displayName}</h1>}
        {user && <h1>{user}</h1>}
     
      </div>
    </div>
  );
};

export default Signup;
