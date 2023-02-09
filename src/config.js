import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC1bGuMQfqliFfgzgpmNEFRJKX_Zhjp51I",
  authDomain: "fb-clone-5682d.firebaseapp.com",
  projectId: "fb-clone-5682d",
  storageBucket: "fb-clone-5682d.appspot.com",
  messagingSenderId: "487302263413",
  appId: "1:487302263413:web:89e92b3af15df34d43be3c"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = app.firestore

export { auth, provider };
export default db;