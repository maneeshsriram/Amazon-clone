// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJY5zGetCRBcbSnVa8K_bEsplk5lCF3e8",
    authDomain: "amazn-clone-by-maneesh.firebaseapp.com",
    databaseURL: "https://amazn-clone-by-maneesh.firebaseio.com",
    projectId: "amazn-clone-by-maneesh",
    storageBucket: "amazn-clone-by-maneesh.appspot.com",
    messagingSenderId: "284497157529",
    appId: "1:284497157529:web:4556c2cac31136036f4708",
    measurementId: "G-4CJ3JY3G6W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
