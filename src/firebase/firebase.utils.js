import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhftEMRzkicn94qPxY3Ij17wSSmHZBgRQ",
    authDomain: "crwn-db-91963.firebaseapp.com",
    projectId: "crwn-db-91963",
    storageBucket: "crwn-db-91963.appspot.com",
    messagingSenderId: "189297717963",
    appId: "1:189297717963:web:0affa174324ffc609a614e",
    measurementId: "G-HN6VYLJ1GJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;