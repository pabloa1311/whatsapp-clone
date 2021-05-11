import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9xoq2Zj2VXrkAANXXAFDIE_AM3zB00dg",
  authDomain: "whatsapp-clone-86484.firebaseapp.com",
  projectId: "whatsapp-clone-86484",
  storageBucket: "whatsapp-clone-86484.appspot.com",
  messagingSenderId: "671349875115",
  appId: "1:671349875115:web:e5a324b83fcb8329f772ee",
  measurementId: "G-KVYH9V7EE0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
