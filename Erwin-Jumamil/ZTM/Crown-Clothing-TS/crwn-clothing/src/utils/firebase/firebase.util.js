import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAafS0eY3zQhO0qvppA5rMZoyqc0Jdyz5Q",
  authDomain: "crwn-clothing-db-1bd03.firebaseapp.com",
  projectId: "crwn-clothing-db-1bd03",
  storageBucket: "crwn-clothing-db-1bd03.appspot.com",
  messagingSenderId: "915317716522",
  appId: "1:915317716522:web:1772189d234655e95fb553",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
