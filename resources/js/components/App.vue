<template>
    <v-app>
        <Sidebar></Sidebar>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import Sidebar from "./Sidebar.vue";

    export default {
        name: "App",
        components: {
            Sidebar
        }
    }
</script>

<style scoped>

</style>
