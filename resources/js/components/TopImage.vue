<template>
    <div class="top-image">
        <slot id="header"></slot>
    </div>
</template>

<script>
    export default {
        name: "TopImage"
    }
</script>

<style scoped>
    .top-image {
        background: url('/images/washit.jpg') no-repeat center top;
        min-height: 700px;
        width: 100%;
        background-size: cover;
    }

    #header {
        padding-top: 300px;
    }
</style>
