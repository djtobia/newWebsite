<template>
    <div class="white--text">
        <!--        This is where I will input a component that grabs my simple info from the db (or maybe just hard code it) -->
        <v-content id="about">
            <simple-about/>
            <v-row justify="center" align="center">
                <v-col cols="12" lg="6" md="8" class="text-center">
                    <v-btn color="green darken-2" class="white--text" to="/about">More About Dylan</v-btn>
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>

<script>
    import TopImage from "./TopImage.vue";
    import SimpleAbout from "./SimpleAbout";

    import { EventBus } from "../EventBus";
    export default {
        name: "Home",
        components: {
            TopImage,
            SimpleAbout
        },
        created() {
            EventBus.$emit('changeSubtext', 'Software Developer');
        }
    }
</script>

<style scoped>

</style>
