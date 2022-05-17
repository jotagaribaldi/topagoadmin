import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBE3IbpsEVC5YIypN5W3DaSWO80x5sNMvc",
  authDomain: "topagoapp.firebaseapp.com",
  projectId: "topagoapp",
  storageBucket: "topagoapp.appspot.com",
  messagingSenderId: "548820232443",
  appId: "1:548820232443:web:f1e22434bd4555f7eb685e",
  measurementId: "G-0KF2N4YPMD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth();