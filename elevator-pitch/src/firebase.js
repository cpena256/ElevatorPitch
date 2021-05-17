// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCAzF96YL_KinzfJX6IZ1V-ldpEW_yI2RM",
    authDomain: "elevator-pitch-daea9.firebaseapp.com",
    projectId: "elevator-pitch-daea9",
    storageBucket: "elevator-pitch-daea9.appspot.com",
    messagingSenderId: "708597716535",
    appId: "1:708597716535:web:493ecd048ef8cb7db491b2",
    measurementId: "G-RC1HYRYQHE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default database;