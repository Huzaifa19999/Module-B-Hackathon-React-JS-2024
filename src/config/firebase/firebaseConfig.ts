// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATZ-F4VpAyKT69ObwlH9DlNGHfMvCmVDs",
  authDomain: "hackathon-react-js.firebaseapp.com",
  databaseURL: "https://hackathon-react-js-default-rtdb.firebaseio.com",
  projectId: "hackathon-react-js",
  storageBucket: "hackathon-react-js.appspot.com",
  messagingSenderId: "3176620789",
  appId: "1:3176620789:web:e54eb5644e81ffed749bbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app