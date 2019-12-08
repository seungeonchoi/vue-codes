import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyC_bQgvZYtcQjwmmXR2I1YfyZLM7P1t9tQ",
  authDomain: "forestvue-8424e.firebaseapp.com",
  databaseURL: "https://forestvue-8424e.firebaseio.com",
  projectId: "forestvue-8424e",
  storageBucket: "forestvue-8424e.appspot.com",
  messagingSenderId: "183393322822",
  appId: "1:183393322822:web:b7f7f5953f1aa12412c747"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let doc = db.collection("test").doc("unw7czikq27tZ67xabwF");
let union = firebase.firestore.FieldValue.arrayUnion;
export default {
  db,
  union,
  doc
};
