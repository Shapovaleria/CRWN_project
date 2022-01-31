import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAFPvkGq3xvkNMSiZ4xOjkQhB57IV2XZO0",
  authDomain: "crwn-db-feadb.firebaseapp.com",
  projectId: "crwn-db-feadb",
  storageBucket: "crwn-db-feadb.appspot.com",
  messagingSenderId: "130676683375",
  appId: "1:130676683375:web:61a1766bde157a937c539a",
  measurementId: "G-Y76SRJ1V6F"
};

firebase.initializeApp(config);

export const createUserProfileDocument =  async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set( {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
   return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;