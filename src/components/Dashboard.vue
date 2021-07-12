<template>
    <div class="container">
      <router-link :to="{path: 'AddItem'}" >Add new items</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard'
    };
</script>

<style scoped>
  .container {
    margin-top: 7em;
  }
</style>