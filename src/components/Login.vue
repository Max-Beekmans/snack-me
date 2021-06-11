<template>
    <div class="d-flex justify-content-around">
        <form action="/examples/actions/confirmation.php" method="post">
            <h2 class="text-center">Log in</h2>
            <div class="form-group">
                <input v-model="user.username" type="text" class="form-control" placeholder="Username" required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <input v-model="user.password" type="password" class="form-control" placeholder="Password" required="required" autocomplete="off">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Log in</button>
            </div>
<!--            <div class="clearfix">
                <label class="float-left form-check-label"><input type="checkbox"> Remember me</label>
                <a href="#" class="float-right">Forgot Password?</a>
            </div>-->
        </form>
        <!--<p class="text-center"><a href="#">Create an Account</a></p>-->
    </div>
</template>

<script>
    import FireRepo from '../FireRepo'

    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    username: String,
                    password: String
                }
            }
        },
        methods: {
            submitForm: {
            }
        }
    };
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }
</style>