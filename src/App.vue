<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
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
  margin-top: 57px;
}
</style>
