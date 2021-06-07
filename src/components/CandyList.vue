<template>
    <div class="row gx-5">
        <div v-for="item in items" :key="item.name" class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
            <candy-box :item-name="item.name" :item-price="item.price" :item-weight="item.weight" :item-image="item.image" />
        </div>
    </div>
</template>

<script>
    import CandyBox from './CandyBox';

    export default {
        name: 'CandyList',
        components: {CandyBox},
        created() {
          console.log(this.items);
        },
        props: {
            items: Array
        }
/*        data: function() {
            return {
                items: [
                    {
                        name: "Milka Chocolade",
                        weight: 200,
                        price: 2.69
                    }, {
                        name: "Mars",
                        weight: 25,
                        price: 0.99
                    }, {
                        name: "Twix",
                        weight: 25,
                        price: 0.99
                    },
                    {
                        name: "Milka Chocolade2",
                        weight: 200,
                        price: 2.69
                    }, {
                        name: "Mars2",
                        weight: 25,
                        price: 0.99
                    }, {
                        name: "Twix2",
                        weight: 25,
                        price: 0.99
                    },
                    {
                        name: "Milka Chocolade3",
                        weight: 200,
                        price: 2.69
                    }, {
                        name: "Mars3",
                        weight: 25,
                        price: 0.99
                    }, {
                        name: "Twix3",
                        weight: 25,
                        price: 0.99
                    }
                ]
            };
        }*/
    };
</script>

<style scoped>

</style>