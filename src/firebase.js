import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkmMwUnhP1PsC7TefwuZi3UIUJwuhdP0E",
  authDomain: "blog2-a087f.firebaseapp.com",
  projectId: "blog2-a087f",
  storageBucket: "blog2-a087f.appspot.com",
  messagingSenderId: "771238085733",
  appId: "1:771238085733:web:2385e8e9cef4a77b99728c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
