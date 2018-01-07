import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZ9LzDsK0N_oAs8bgBUyWuDUhRJW-hBsA",
    authDomain: "goalcoach-2f2f5.firebaseapp.com",
    databaseURL: "https://goalcoach-2f2f5.firebaseio.com",
    projectId: "goalcoach-2f2f5",
    storageBucket: "goalcoach-2f2f5.appspot.com",
    messagingSenderId: "95420868320"
};

export  const firebaseApp = firebase.initializeApp(config);