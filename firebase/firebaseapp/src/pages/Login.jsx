import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import logo from "../assets/google.jpg"
// import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(null);
  const [usernameid, setUsernameid] = useState(null);
  const [error, setError] = useState("");
//   const navigate = useNavigate();

  const loginUser = () => {
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const userData = user.user;
        setUsername(userData.email); // Or any other property you want to display
        setUsernameid(userData.accessToken);
        // Or any other property you want to display
        console.log(userData.uid, "user UID");
        console.log(user, "login success");

        // Clear inputs after successful login
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  if (usernameid) {
    alert(`Hello ${username}`);
  }
 
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

      <button onClick={loginUser}>Submit</button>
      

      <div>
        {username && <h1>{username}</h1>}
        {usernameid && <h1>{usernameid}</h1>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
