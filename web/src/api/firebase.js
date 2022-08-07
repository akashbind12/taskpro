
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkW3BqSZkOXSXMWl7lB0OnoMufDPT2Z3M",
  authDomain: "react-authetication-71569.firebaseapp.com",
  projectId: "react-authetication-71569",
  storageBucket: "react-authetication-71569.appspot.com",
  messagingSenderId: "13226284930",
  appId: "1:13226284930:web:e6522539a18f909116a19b",
  measurementId: "G-WDNW3TL4JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;