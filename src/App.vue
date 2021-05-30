<template>
  <div id="app">
    <nav-bar></nav-bar>
    <candy-list></candy-list>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const firebase = require("firebase");
require("firebase/firestore");



firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("items").add({
  first: "Ada",
  last: "Lovelace"
})

import CandyList from './components/CandyList';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    CandyList,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 56px;
}
</style>
