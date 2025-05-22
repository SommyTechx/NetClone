import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA_hOSZXIlMlHxgI3w42kGnwiXYpKXvo2k",
  authDomain: "netflix-clone-50a11.firebaseapp.com",
  projectId: "netflix-clone-50a11",
  storageBucket: "netflix-clone-50a11.firebasestorage.app",
  messagingSenderId: "479558151688",
  appId: "1:479558151688:web:71c3675e25110e31a8ebbd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await updateProfile(user, { displayName: name });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      createAt: new Date(),
    });
    return user;
  } catch (error) {
    console.error("Signup Error:", error.message);

    throw toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
    return res.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw toast.error("Login failed. Please check your credentials.");
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
