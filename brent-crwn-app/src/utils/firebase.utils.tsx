import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration | Allows CRUD actions
const firebaseConfig = {
  apiKey: "AIzaSyAkmB0Yh9-gpeU8Jkf-bYoIb3xO4_ZO4AY",
  authDomain: "brent-clothing-db.firebaseapp.com",
  projectId: "brent-clothing-db",
  storageBucket: "brent-clothing-db.appspot.com",
  messagingSenderId: "675018157145",
  appId: "1:675018157145:web:1e12340fca4d817cec9548"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

const auth = getAuth();
export default auth;
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth:any,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error:any) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};