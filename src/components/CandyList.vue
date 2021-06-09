<template>
    <div class="row gx-5">
        <div class="loading" v-if="loading">loading...</div>
        <div v-for="item in items" :key="item.name" class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
            <candy-box :item-name="item.name" :item-price="item.price" :item-weight="item.weight" :item-image="item.image" />
        </div>
    </div>
</template>

<script>
    import CandyBox from './CandyBox';
    import FireRepo from '../FireRepo';

    export default {
        name: 'CandyList',
        components: {CandyBox},
        data: function () {
            return {
                loading: false,
                items: []
            }
        },
        created() {
            this.fetchItems()
        },
        methods: {
            fetchItems() {
                this.loading = true;
                FireRepo.getItems()
                    .then((data) => {
                        data.forEach((doc) => {
                            this.loading = false;
                            console.log(doc.data());
                            let d = doc.data();
                            this.items.splice(0, d.count, d);
                        });
                    }).catch((err) => {
                    console.log(err);
                });
            }
        }
    };
</script>

<style scoped>

</style>