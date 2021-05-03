
import firebase from "firebase/app";

import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBsmHkZmUaI72fVMf2IwoaqVdRtKbA01Ek",
  authDomain: "elcomplus-219b6.firebaseapp.com",
  databaseURL: "https://elcomplus-219b6-default-rtdb.firebaseio.com",
  projectId: "elcomplus-219b6",
  storageBucket: "elcomplus-219b6.appspot.com",
  messagingSenderId: "518825330297",
  appId: "1:518825330297:web:f9fa10d2dbcf2831e1b6a8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
