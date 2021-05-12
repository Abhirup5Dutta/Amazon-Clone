import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAPmeBPkpoK1wdj95o0SS3I4VfuYEDUZNA",
    authDomain: "clone-d2987.firebaseapp.com",
    projectId: "clone-d2987",
    storageBucket: "clone-d2987.appspot.com",
    messagingSenderId: "520666560444",
    appId: "1:520666560444:web:61ca5788eae0e2be7bddb9",
    measurementId: "G-FZ8X2T0X3K"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth };