
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAoiIOzKb914XUhPDb0Y0GNkfCkrs2l4ns",
  authDomain: "personal-website-nguyen.firebaseapp.com",
  projectId: "personal-website-nguyen",
  storageBucket: "personal-website-nguyen.appspot.com",
  messagingSenderId: "646124313907",
  appId: "1:646124313907:web:1377de3d026fb356ca3246",
  measurementId: "G-RCQRX6P3HT"
});

var db = firebaseApp.firestore();

export { db };

