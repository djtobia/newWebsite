<template>
    <div class="top-image">
        <div id="header" class="text-center">
            <h1 class="display-4 font-weight-bold shadowed white--text">Dylan Tobia</h1>
            <br>
            <h2 class="display-2 font-weight-bold shadowed white--text">{{subText}}</h2>
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../EventBus";

    export default {
        name: "TopImage",
        data() {
            return {
                subText: 'Software Developer'
            }
        },
        created() {
            EventBus.$on('changeSubtext', newVal => {
                this.subText = newVal;
            })
        }
    }
</script>

<style scoped>
    .top-image {
        background: url('/images/NightBloom.png') no-repeat center top;
        min-height: 700px;
        width: 100%;
        background-size: cover;
    }

    #header {
        padding-top: 300px;
    }
</style>
