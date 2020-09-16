import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAiQ9fPFaiBXsNKXsz4bcmcF7cI7D98xU",
    authDomain: "bullet-journal-398e2.firebaseapp.com",
    databaseURL: "https://bullet-journal-398e2.firebaseio.com",
    projectId: "bullet-journal-398e2",
    storageBucket: "bullet-journal-398e2.appspot.com",
    messagingSenderId: "833539496978",
    appId: "1:833539496978:web:a2688a3d81374cb2f5cccb"
  });

  const db = firebaseApp.firestore();

  export default db;