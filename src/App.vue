<template>
  <div id="app">
    <nav-bar></nav-bar>
    <candy-list v-if="items" :items="items"></candy-list>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FireRepo from './FireRepo';
import CandyList from './components/CandyList';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  created() {
    FireRepo.getItems()
            .then((data) => {
              data.forEach((doc) => {
                console.log(doc.data());
                let d = doc.data();
                this.items.splice(0, d.count, d);
                //this.items = new Array(doc.data());
              });
            }).catch((err) => {
      console.log(err);
    });
  },
  data() {
      return {
        items: []
      };
  },
  components: {
    CandyList,
    NavBar
  },
  mounted() {
    let script = document.createElement('script');
    script.setAttribute('src', "https://kit.fontawesome.com/0fbfd00334.js");
    script.setAttribute('crossorigin', "anonymous");
    document.head.appendChild(script);
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
