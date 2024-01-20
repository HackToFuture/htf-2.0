import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const api = import.meta.env.VITE_FIREBASE_API;

const firebaseConfig = {
  apiKey: api,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
const app = initializeApp(firebaseConfig);

// export const auth = firebase.auth();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
