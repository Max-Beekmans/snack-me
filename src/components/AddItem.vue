<template>
  <div class="container">
    <h2>Add new item</h2>
    <form
      id="addItemForm"
      @submit="checkForm">
      <p v-if="errors.length > 0">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </p>
      <div class="form-group">
        <label for="item-name">Item name</label>
        <input v-model="name" type="text" class="form-control" id="item-name" aria-describedby="emailHelp" placeholder="Item Name">
      </div>
      <div class="form-group">
        <label for="item-weight">Item weight</label>
        <input v-model="weight" type="text" class="form-control" id="item-weight" placeholder="Item Weight">
        <small id="weightHelp" class="form-text text-muted">Weight in grams. Don't add unit at the end.</small>
      </div>
      <div class="form-group">
        <label for="item-price">Item price</label>
        <input v-model="price" type="text" class="form-control" id="item-price" placeholder="Item Price">
        <small id="priceHelp" class="form-text text-muted">Price in euro's. Don't add unit at the end.</small>
      </div>
      <div class="form-group">
        <label for="item-image">Item image</label>
        <input @change="setFile" type="file" accept="image/*" class="form-control-file" id="item-image">
        <small id="imageHelp" class="form-text text-muted">Only images are allowed. Also make sure your path doesn't have special characters or spaces.</small>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
import imageService from '../services/image-service';

export default {
  name: 'AddItem',
  data() {
    return {
      errors: [],
      name: null,
      weight: null,
      price: null,
      image: null
    }
  },
  methods: {
    setFile(event) {
      this.image = event.target.files[0];
    },
    checkForm: function(e) {
      this.errors = [];

      if (!this.AlphaNumCheck(this.name))
        this.errors.push("Name is required and can only contain a-z. 1-9 and underscores.");

      if (!this.AlphaNumCheck(this.weight))
        this.errors.push("Weight is required and can only contain a-z. 1-9 and underscores.");

      if (!this.NumCheck(this.price))
        this.errors.push("Name is required and can only contain a-z. 1-9 and underscores.");

      if (!this.image)
        this.errors.push("Image is required and can only be an image.");

      let imgPath = "items/" + this.image.name;
      let imgRef = imageService.getImageRef(imgPath);

      this.$store.dispatch('addItem', {
        name: this.name,
        weight: this.weight,
        price: this.price,
        image: imgPath
      }).then(() => {
        imageService.uploadFile(imgRef, this.image)
          .then((res) => {
            console.log(res);
            this.$router.push({ path: "dashboard" });
          })
          .catch(err => {
            console.log(err);
          })
      });

      e.preventDefault();
    }
  }
};
</script>

<style scoped>
  .container {
    margin-top: 7em;
    max-width: 50%;
    text-align: left;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>