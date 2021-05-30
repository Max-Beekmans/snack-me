<template>
    <div class="row">
        <candy-box class="col-3"></candy-box>
        <candy-box class="col-3"></candy-box>
        <candy-box class="col-3"></candy-box>
        <candy-box class="col-3"></candy-box>
    </div>
</template>

<script>
    import CandyBox from './CandyBox';
    export default {
        name: 'CandyList',
        components: {CandyBox}
    };
</script>

<style scoped>

</style>