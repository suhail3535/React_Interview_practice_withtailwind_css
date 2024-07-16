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
  const [user, setUser] = useState(null);

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error signing up with email and password:", error);
      });
  };

  const signupwithgoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = result.user;
        setUser(userData);
        console.log(userData.displayName, "user UID");
        console.log(userData.email, "login success");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
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

      <label>Password</label>
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
        {user && <h1>{user.email}</h1>}
      </div>
    </div>
  );
};

export default Signup;
