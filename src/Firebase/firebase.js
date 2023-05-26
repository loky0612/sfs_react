import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBoaaPEOp9_eRWRAQIWMFO5zhDsc3HYgoc",
  authDomain: "cit-sfs.firebaseapp.com",
  projectId: "cit-sfs",
  storageBucket: "cit-sfs.appspot.com",
  messagingSenderId: "737923145825",
  appId: "1:737923145825:web:b9e69bc9b05fce36168a20"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
