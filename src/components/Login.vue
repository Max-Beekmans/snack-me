<template>
    <div class="d-flex justify-content-around">
        <form>
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
                <label for="username">{{ $t('login.email') }}</label>
                <input id="username" v-model="user.username" type="text" class="form-control" placeholder="email"  required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="password">{{ $t('login.password') }}</label>
                <input id="password" v-model="user.password" type="password" class="form-control" placeholder="password" required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <button type="submit" v-on:onclick="submitForm" class="btn btn-primary btn-block">Log in</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            submitForm: function () {
              let email = this.username;
              let password = this.password;

              console.log(email);
              console.log(password);

              this.$store.dispatch('signIn', {
                email: email,
                password: password
              })
              .then((user) => {
                console.log("wut?" + user);
                //this.$router.push({ path: "dashboard" });
              }).catch((err) => {
                console.log(err);
              })
            }
        }
    };
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }
</style>