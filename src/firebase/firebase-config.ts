import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyByjlzDY4lCcFyaS7GIEOh7cFKrtS15ZxU",
    authDomain: "auth-verification-516ba.firebaseapp.com",
    projectId: "auth-verification-516ba",
    storageBucket: "auth-verification-516ba.appspot.com",
    messagingSenderId: "814931306517",
    appId: "1:814931306517:web:600ba5c3c7f366c3bd861c",
    measurementId: "G-F4L428XZJF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };