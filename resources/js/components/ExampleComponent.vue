<template>
    <v-app>
        <v-card>
            <v-card-title>Title</v-card-title>
            <v-card-text>Some text</v-card-text>
            <v-card-actions>
                <v-btn color="tertiary" @click="changeTheme"> Test</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
    export default {
       data() {
           return {
               darkTheme: false
           };
       },
        methods: {
           changeTheme() {
               this.darkTheme = !this.darkTheme;
               this.$vuetify.theme.dark = this.darkTheme;
           }
        }
    }
</script>
