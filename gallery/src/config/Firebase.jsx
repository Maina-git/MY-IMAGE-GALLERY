import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyC04OxpvYZm8v9aCrFVwckeNNURaHUvckk",
  authDomain: "display-d9a23.firebaseapp.com",
  projectId: "display-d9a23",
  storageBucket: "display-d9a23.appspot.com",
  messagingSenderId: "1050523988031",
  appId: "1:1050523988031:web:279a024bf1727cd0f2c88a"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const storage=getStorage(app);









