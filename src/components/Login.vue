<template>
    <div class="container">
        <form
          @submit="submitForm">
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
                <label for="username">{{ $t('login.email') }}</label>
                <input id="username" v-model="username" type="text" class="form-control" placeholder="email"  required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="password">{{ $t('login.password') }}</label>
                <input id="password" v-model="password" type="password" class="form-control" placeholder="password" required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Log in</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
              username: "",
              password: ""
            }
        },
        methods: {
            submitForm: function (e) {
              let email = this.username;
              let password = this.password;

              this.$store.dispatch('signIn', {
                email: email,
                password: password
              })
              .then(() => {
                this.$router.push({ path: "dashboard" });
              }).catch((err) => {
                console.log(err);
              })

              e.preventDefault();
            }
        }
    };
</script>

<style scoped>
    .container {
      margin-top: 7em;
      max-width: 50%;
      min-width: 150px;
      text-align: left;
    }

    .form-group {
        margin-bottom: 1rem;
    }
</style>