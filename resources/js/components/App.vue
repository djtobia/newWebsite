<template>
    <v-app class="background-dark">
        <Sidebar></Sidebar>
        <v-content>
            <router-view></router-view>
        </v-content>
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
    .background-dark {
        background: black;
    }
</style>

<!-- Global Styles -->
<style>
    .link-text {
        color: #FFC107;
        text-decoration: none;
    }
    .link-text:hover {
        color: gray;
    }

    .link-text:visited {
        color: red;
    }
    .center-align {
        text-align: center;
    }
    .shadowed {
        text-shadow: 5px 3px darkslategray;
    }
</style>
