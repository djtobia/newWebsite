<template>
    <div class="white--text">
        <top-image>
            <div id="header" class="center-align">
                <h1 class="display-4 font-weight-bold shadowed">Dylan Tobia</h1>
                <br>
                <h2 class="display-2 font-weight-bold shadowed">About</h2>
            </div>
        </top-image>
        <v-divider/>
        <v-content>
            <simple-about/>
        </v-content>

    </div>
</template>

<script>
    import TopImage from "./TopImage";
    import SimpleAbout from "./SimpleAbout";
    export default {
        name: "About",
        components: {
            TopImage,
            SimpleAbout
        }
    }
</script>

<style scoped>

</style>
