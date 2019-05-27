import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA1cp1dhZLMr6J-RZheYLPbwfSloqgWR20",
    authDomain: "react-chat-3430b.firebaseapp.com",
    databaseURL: "https://react-chat-3430b.appspot.com",
    projectId: "react-chat-3430b",
    storageBucket: "react-chat-3430b.appspot.com",
    messagingSenderId: "76920641998",
    appId: "1:76920641998:web:fbbcc79b26b1b002"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;