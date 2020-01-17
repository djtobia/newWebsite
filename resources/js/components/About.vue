<template>
    <div class="white--text">
        <v-content>
            <simple-about/>
        </v-content>
    </div>
</template>

<script>
    import TopImage from "./TopImage";
    import SimpleAbout from "./SimpleAbout";

    import { EventBus } from "../EventBus";

    export default {
        name: "About",
        components: {
            TopImage,
            SimpleAbout
        },
        created() {
            EventBus.$emit('changeSubtext',  'About')
        }
    }
</script>

<style scoped>

</style>
