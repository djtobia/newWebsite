<template>
    <div class="white--text">
        <top-image>
            <div id="header" class="center-align">
                <h1 class="display-4 font-weight-bold shadowed">Dylan Tobia</h1>
                <br>
                <h2 class="display-2 font-weight-bold shadowed">Software Developer</h2>
            </div>
        </top-image>
        <!--        This is where I will input a component that grabs my simple info from the db (or maybe just hard code it) -->
        <v-divider/>
        <v-content id="about">
            <simple-about/>
            <v-row justify="center" align="center">
                <v-spacer/>
                <v-col cols="12" lg="6" md="8" class="center-align">
                    <v-btn color="amber" to="/about">More About Dylan</v-btn>
                </v-col>
                <v-spacer/>
            </v-row>
        </v-content>
    </div>
</template>

<script>
    import TopImage from "./TopImage.vue";
    import SimpleAbout from "./SimpleAbout";
    export default {
        name: "Home",
        components: {
            TopImage,
            SimpleAbout
        }
    }
</script>

<style scoped>

</style>
