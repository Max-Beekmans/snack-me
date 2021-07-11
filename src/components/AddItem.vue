<template>
  <div>
    <form
      id="addItemForm"
      @submit="checkForm"
    >
      <p v-if="errors.length > 0">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </p>
      <div class="form-group">
        <label for="item-name">Item name</label>
        <input type="text" class="form-control" id="item-name" aria-describedby="emailHelp" placeholder="Item Name">
      </div>
      <div class="form-group">
        <label for="item-weight">Item weight</label>
        <input type="text" class="form-control" id="item-weight" placeholder="Item Weight">
      </div>
      <div class="form-group">
        <label for="item-price">Item price</label>
        <input type="text" class="form-control" id="item-price" placeholder="Item Price">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data() {
    return {
      errors: [],
      item: {
        name: null,
        weight: null,
        price: null
      }
    }
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];

      if (!this.AlphaNumCheck(this.name))
        this.errors.push("Name is required and can only contain a-z. 1-9 and underscores");

      if (!this.AlphaNumCheck(this.weight))
        this.errors.push("Weight is required and can only contain a-z. 1-9 and underscores");

      if (!this.NumCheck(this.price))
        this.errors.push("Name is required and can only contain a-z. 1-9 and underscores");

      e.preventDefault();
    }
  }
};
</script>

<style scoped>

</style>