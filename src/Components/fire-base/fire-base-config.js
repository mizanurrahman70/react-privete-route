// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWJSM3NlMzXxh7t5pfbyhZgHfPplQ9xVE",
  authDomain: "privet-router-b8767.firebaseapp.com",
  projectId: "privet-router-b8767",
  storageBucket: "privet-router-b8767.appspot.com",
  messagingSenderId: "94575358389",
  appId: "1:94575358389:web:e8ebaceac5c4560e6369fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth