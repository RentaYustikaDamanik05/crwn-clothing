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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) { return; } 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;