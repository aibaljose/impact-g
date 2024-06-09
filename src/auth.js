import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signup = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
setLoggedIn(true)
  } catch (error) {
    alert(error.message);
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
  } catch (error) {
    alert(error.message);
  }
};


export const logout = async () => {
  try {
    await signOut(auth);
    alert("Logout successful!");
  } catch (error) {
    alert("Error logging out:", error.message);
  }
};