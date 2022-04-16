// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv_ZBJA1LFLrv_xs0_-nFptdDs-a7FU5I",
  authDomain: "care-giver-82af9.firebaseapp.com",
  projectId: "care-giver-82af9",
  storageBucket: "care-giver-82af9.appspot.com",
  messagingSenderId: "578932085354",
  appId: "1:578932085354:web:f59973d0f5d5e49b5bf013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;