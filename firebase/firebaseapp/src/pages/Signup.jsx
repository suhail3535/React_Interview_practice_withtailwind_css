import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) =>
    
      console.log(user)
    );
    setEmail("")
    setPassword("")
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
    </div>
  );
};

export default Signup;
