import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Email Signup
export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Email Login
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Google Login
export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Logout
export const logoutUser = () => signOut(auth);
