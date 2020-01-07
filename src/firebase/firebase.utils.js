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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// trigger google popup whenever use google authenticaiton
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
