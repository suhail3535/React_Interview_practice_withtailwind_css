// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2bE5yobMqm7jrB2DcJ4OtdESrjhY6rMo",
  authDomain: "blogs-app-c9fa1.firebaseapp.com",
  projectId: "blogs-app-c9fa1",
  storageBucket: "blogs-app-c9fa1.appspot.com",
  messagingSenderId: "781260307446",
  appId: "1:781260307446:web:b86cb32bd59d4cfeb925d7",
  databaseURL:"https://blogs-app-c9fa1-default-rtdb.firebaseio.com/"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);