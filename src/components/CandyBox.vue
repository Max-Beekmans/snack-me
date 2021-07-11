<template>
    <div class="card text-center p-3" style="width: 18rem;">
        <img v-if="image" v-bind:src="image" class="card-img-top" alt="...">
        <div v-else class="loading">loading...</div>
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p v-if="description" class="card-text">{{description}}</p>
            <div class="row">
                <div class="col-5">
                    {{weight}}g
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
    import imageService from '@/services/image-service';

    export default {
        name: 'CandyBox',
        data() {
            return {
                image: ""
            }
        },
        created() {
          imageService.getImageRef(this.imageUrl)
                .getDownloadURL()
                .then((url) => {
                    this.image = url;
                }).catch((err) => {
                    console.log(err);
            });
        },
        props: {
            name: String,
            description: String,
            weight: Number,
            price: Number,
            imageUrl: String,
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