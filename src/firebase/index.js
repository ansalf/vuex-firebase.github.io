import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYxqSM5TdRItDbBV3BcaXtLsJsQ96hX6Q",
  authDomain: "autoform-a6f3b.firebaseapp.com",
  databaseURL: "https://autoform-a6f3b-default-rtdb.firebaseio.com",
  projectId: "autoform-a6f3b",
  storageBucket: "autoform-a6f3b.appspot.com",
  messagingSenderId: "924908023838",
  appId: "1:924908023838:web:dd18c731b468d3b50abe0f",
  measurementId: "G-QQFTLJYJB5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
