import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGGSexdXhqGbOPLPf3qI18qLlJcZ9--cY",
  authDomain: "watch-store-a7d85.firebaseapp.com",
  databaseURL: "https://watch-store-a7d85.firebaseio.com",
  projectId: "watch-store-a7d85",
  storageBucket: "watch-store-a7d85.appspot.com",
  messagingSenderId: "631427785810",
  appId: "1:631427785810:web:aecb36b82b5a8aea546b8b",
  measurementId: "G-MLCEWTDFRL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check valid user
  if (!userAuth) return;
  // query inside firestore to see if already exists
  const userRef = firestore.doc(`users/${userAuth.id}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        ...additionalData,
        displayName,
        createdAt,
        email
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// trigger google popup whenever use google authenticaiton
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
