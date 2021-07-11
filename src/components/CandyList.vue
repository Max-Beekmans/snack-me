<template>
    <div class="row gx-5">
        <div class="loading" v-if="items.length === 0">loading...</div>
        <div v-for="item in items" :key="item.name" class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
            <candy-box :name="item.name" :description="item.description" :price="item.price" :weight="item.weight" :imageUrl="item.image" />
        </div>
    </div>
</template>

<script>
    import CandyBox from './CandyBox';

    export default {
        name: 'CandyList',
        components: {CandyBox},
        data: function () {
            return {
                loading: false
            }
        },
        computed: {
          items() {
            return this.$store.getters.featuredItems;
          }
        },
        created() {
          this.$store.dispatch('getItems');
        }
    };
</script>

<style scoped>

</style>