import { useEffect, useState } from "react";
import { signOut,getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const userSignout = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("user logout");
        setUser(null);
      }
    });
  };
  useEffect(() => {
    userSignout();
  }, []);


  return (
    <>
    
    {user?<div><h1>Hello {user.email}</h1> <button onClick={()=>signOut(auth)}>LogOut</button></div>:<div>
        <h1>Signup Page</h1>
        <Signup />
        <h1>Login Page</h1>

        <Login />
      </div>}
      
    </>
  );
}

export default App;
