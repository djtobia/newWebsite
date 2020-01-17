<template>
    <v-app class="background-dark">
        <sidebar/>
        <top-image>
            <template v-slot:header>

            </template>
            <</top-image>
        <v-content>
            <router-view/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Sidebar from "./Sidebar.vue";
    import Footer from "./Footer";
    import TopImage from "./TopImage";
    export default {
        name: "App",
        components: {
            Sidebar,
            TopImage,
            Footer
        },
        data() {
            return {
                subText : 'Software Developer'
            }
        },
        created() {
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
        color: lightgreen;
        text-decoration: none;
    }
    .link-text:hover {
        color: gray;
    }

    .link-text:visited {
        color: green;
    }

    .shadowed {
        text-shadow: 5px 3px darkslategray;
    }
</style>
