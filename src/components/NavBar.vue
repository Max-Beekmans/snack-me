<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">SnackMe</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-bind:class="{ active: $route.path === '/prices'}">
                        <router-link to="/prices" class="nav-link">{{ $t('nav.prices') }}</router-link>
                    </li>
                    <li class="nav-item" v-bind:class="{ active: $route.path === '/contact'}">
                        <router-link to="/contact" class="nav-link">{{ $t('nav.contact') }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    };
</script>

<style scoped>

</style>