import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArbXR1lOr0bVfcrHpUiRSMyGVOkvCAlPs",
  authDomain: "curso-redux-1.firebaseapp.com",
  projectId: "curso-redux-1",
  storageBucket: "curso-redux-1.appspot.com",
  messagingSenderId: "1014322446964",
  appId: "1:1014322446964:web:b626c7bf3cd0d5d2900721"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    app
}

/*import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



  // Import the functions you need from the SDKs you need
 // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  export const firebaseConfig = {
    apiKey: "AIzaSyArbXR1lOr0bVfcrHpUiRSMyGVOkvCAlPs",
    authDomain: "curso-redux-1.firebaseapp.com",
    projectId: "curso-redux-1",
    storageBucket: "curso-redux-1.appspot.com",
    messagingSenderId: "1014322446964",
    appId: "1:1014322446964:web:b626c7bf3cd0d5d2900721"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  //Esta es la bbdd
  const db=firebase.firestore();

  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }*/
