import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBTNmiQEb-Hwtnn6V2R_RxonF-wlUrBYgM",
    authDomain: "letmeask-48a7e.firebaseapp.com",
    databaseURL: "https://letmeask-48a7e-default-rtdb.firebaseio.com",
    projectId: "letmeask-48a7e",
    storageBucket: "letmeask-48a7e.appspot.com",
    messagingSenderId: "428265752692",
    appId: "1:428265752692:web:74e44a76ae359b6c8c2921"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database()