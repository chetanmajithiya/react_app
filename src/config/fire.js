import firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBZYOTxrC1smiOxfaLTfqySQklFb5IR4SY",
    authDomain: "mysite-25c0f.firebaseapp.com",
    databaseURL: "https://mysite-25c0f.firebaseio.com",
    projectId: "mysite-25c0f",
    storageBucket: "mysite-25c0f.appspot.com",
    messagingSenderId: "465606218454",
    appId: "1:465606218454:web:534d27f29bcb1453"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);

export default fire;