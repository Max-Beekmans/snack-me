<template>
    <div id="home" class="container">
      <candy-list></candy-list>
    </div>
</template>

<script>
    import CandyList from '@/components/CandyList';

    export default {
        name: 'Home',
        components: {
          CandyList
        }
    };
</script>

<style scoped>
    .container {
      margin-top: 7em;
    }

    #home {
        padding: 25px;
    }
</style>