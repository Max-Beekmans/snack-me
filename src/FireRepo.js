import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import config from './config/FirebaseConfig';

const repo = function() {
    firebase.initializeApp({
        apiKey: config.apiKey,
        appId: config.appId,
        projectId: config.projectId,
        authDomain: config.authDomain,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        measurementId: config.measurementId
    });

    let db = firebase.firestore();
    let storage = firebase.storage();
    storage.useEmulator("localhost", 9199);

    let getItems = function() {
        return db.collection("items").get();
    };

    let addItem = function(item) {
        db.collection("items").add({
            first: item.first,
            last: item.last
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    };

    let getImageRef = function(imageRef) {
        return storage.ref(imageRef).getDownloadURL();
    };

    return {
        getItems: getItems,
        addItem: addItem,
        getImageRef: getImageRef
    }
}();

export default repo;