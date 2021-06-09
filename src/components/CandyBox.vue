<template>
    <div class="card text-center p-3" style="width: 18rem;">
        <img v-if="image" v-bind:src="image" class="card-img-top" alt="...">
        <div v-else class="loading">loading...</div>
        <div class="card-body">
            <h5 class="card-title">{{itemName}}</h5>
            <p v-if="itemDescription" class="card-text">{{itemDescription}}</p>
            <div class="row">
                <div class="col-5">
                    {{itemWeight}}g
                </div>
                <div class="col-2" />
                <div class="col-5">
                    <a href="#" class="btn btn-primary">
                        <i class="fas fa-cart-plus"></i> Add
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FireRepo from '../FireRepo';

    export default {
        name: 'CandyBox',
        data() {
            return {
                image: ""
            }
        },
        created() {
            FireRepo.getImageRef(this.itemImage)
                .getDownloadURL()
                .then((url) => {
                    console.log(url);
                    this.image = url;
                }).catch((err) => {
                    console.log(err);
            });
        },
        props: {
            itemName: String,
            itemDescription: String,
            itemWeight: Number,
            itemPrice: Number,
            itemImage: String,
        }
    };
</script>

<style scoped>
    .candyBox {
        background-color: aquamarine;
        padding: 25px;
        font-size: 30pt;
    }
</style>