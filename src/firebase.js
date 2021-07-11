import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage';
import FirebaseConfig from '@/config/firebase-config';

const fb = firebase.initializeApp(FirebaseConfig);

export const fbDb = fb.firestore();
export const fbAuth = firebase.auth;
export const fbStorage = firebase.storage();