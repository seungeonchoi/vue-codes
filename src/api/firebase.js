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
const db = firebase.firestore();
const doc = db.collection("test").doc("unw7czikq27tZ67xabwF");
const union = firebase.firestore.FieldValue.arrayUnion;
const now = firebase.firestore.Timestamp.now;
const del = firebase.firestore.FieldValue.delete;
export { db, union, doc, now, del };
