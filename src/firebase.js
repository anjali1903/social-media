import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBM6cZY_y_HtAsi9OQIbvMva1FbAqdf8oI",
  authDomain: "social-media-7b5a3.firebaseapp.com",
  databaseURL: "https://social-media-7b5a3.firebaseio.com",
  projectId: "social-media-7b5a3",
  storageBucket: "social-media-7b5a3.appspot.com",
  messagingSenderId: "1026329074768",
  appId: "1:1026329074768:web:6dc91c61e30911c510c555",
  measurementId: "G-D33HS296ZB",
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
