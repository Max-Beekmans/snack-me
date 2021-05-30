const firebase = require("firebase");
require("firebase/firestore");
var config = import("config/FirebaseConfig");

var repo = function() {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    var getItems = function() {

    };

    var addItem = function(item) {

    };

    return {
        getItems: getItems
    }
}();

export default {

}

const firebase = require("firebase");
require("firebase/firestore");



firebase.