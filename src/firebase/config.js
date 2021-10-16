import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/firestore";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOp57R_ZcvHUEmYCzBeCBR6eeT743-1hI",
  authDomain: "olx-clone-625ca.firebaseapp.com",
  projectId: "olx-clone-625ca",
  storageBucket: "olx-clone-625ca.appspot.com",
  messagingSenderId: "535830034401",
  appId: "1:535830034401:web:dc66a9cca5e4970116c4a0",
  measurementId: "G-LLT191YTXQ",
};

export default firebase.initializeApp(firebaseConfig);
