import * as firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDKWhQpyINAMufIPTaI64GTO4sqzv2k6S0",
  authDomain: "awesome-todo-9bd20.firebaseapp.com",
  databaseURL: "https://awesome-todo-9bd20.firebaseio.com",
  projectId: "awesome-todo-9bd20",
  storageBucket: "awesome-todo-9bd20.appspot.com",
  messagingSenderId: "1014473389134",
  appId: "1:1014473389134:web:0459360f5f2ac4bd577f1f",
  measurementId: "G-WD9B0GBVM9"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAnalytics = firebase.analytics();

let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }