import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage';
import 'firebase/auth';
import FirebaseConfig from '@/config/firebase-config';

const fb = firebase.initializeApp(FirebaseConfig);

export const fbDb = fb.firestore();
export const fbAuth = fb.auth();
export const fbStorage = firebase.storage();