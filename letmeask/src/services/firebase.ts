import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// dados do firebase que estão salvos como variáveis de ambiente
// também disponíveis nas configurações do projeto firebase

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

// inicializando app com minha config
firebase.initializeApp(firebaseConfig);

// usando as autenticações que eu defini no projeto firebase
const auth = firebase.auth();

// usando a database que eu defini no projeto firebase
const database = firebase.database();

export { firebase, auth, database };