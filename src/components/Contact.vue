<template>
    <div class="container">
        <div class="row">
          <div class="col-4">
            <h2>Contact</h2>
            <img src="https://via.placeholder.com/150" alt="profile" />
            <p>
              Profile text here that introduces SnackMe
            </p>
          </div>
          <div class="col-8">
            <img src="https://via.placeholder.com/600x250">
            <p>
              More room for text More room for text More room for text
              More room for text More room for text More room for text
              More room for text More room for text More room for text
              More room for text More room for text More room for text
            </p>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact'
    };
</script>

<style scoped>
  .container {
    margin-top: 7em;
  }

  .row > div > p {
    padding: 2em;
  }
</style>