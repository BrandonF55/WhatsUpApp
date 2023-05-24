
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


export const getFirebaseApp = () => {

    // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDflOllJgtwGuCav6MBq5gInQrS387sxQA",
    authDomain: "whatsupapp-87ea3.firebaseapp.com",
    projectId: "whatsupapp-87ea3",
    storageBucket: "whatsupapp-87ea3.appspot.com",
    messagingSenderId: "450767452471",
    appId: "1:450767452471:web:e150c0ada9fbbf087e02b2",
    measurementId: "G-98ESRB7X08"
  };
  
  // Initialize Firebase
return initializeApp(firebaseConfig);

}

// moved the firebase into its own component and out of the sign up form. now we just call getFirebaseConfig when we want to use it.