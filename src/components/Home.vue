<template>
    <div id="home" class="container">
        <candy-list></candy-list>
    </div>
</template>

<script>
    import CandyList from './CandyList';

    export default {
        name: 'Home',
        components: {
            CandyList
        }
    };
</script>

<style scoped>
    #home {
        padding: 25px;
    }
</style>