import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAwTLfHMtStHaX-p2pxCU5fCgaz8VbO4iA",
    authDomain: "portfolio-1a8a1.firebaseapp.com",
    projectId: "portfolio-1a8a1",
    storageBucket: "portfolio-1a8a1.appspot.com",
    messagingSenderId: "260855949246",
    appId: "1:260855949246:web:20b484b6b40330f533bbef",
    measurementId: "G-N6FEPGQGZS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db=firebase.firestore();