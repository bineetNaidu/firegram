import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCUj4kQ2iE0iu7SH6DLIIRSVFeS7IV9IE',
  authDomain: 'firegram-82050.firebaseapp.com',
  databaseURL: 'https://firegram-82050.firebaseio.com',
  projectId: 'firegram-82050',
  storageBucket: 'firegram-82050.appspot.com',
  messagingSenderId: '200365826942',
  appId: '1:200365826942:web:19df4c953e83a91ca3892f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectAuth = firebase.auth();
export const projectAuthProvider = new firebase.auth.GoogleAuthProvider();
export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
