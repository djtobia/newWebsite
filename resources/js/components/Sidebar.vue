<template>
    <v-navigation-drawer
        expand-on-hover
        app
        permanent
        right
    >
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="/images/me.jpg"></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title><strong>Dylan Tobia</strong></v-list-item-title>
                    <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>Home</v-list-item-content>
            </v-list-item>
            <v-list-item to="/about">
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>About</v-list-item-content>
            </v-list-item>
            <v-list-item to="/projects">
                <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-content>Projects</v-list-item-content>
            </v-list-item>
            <v-list-item to="/contact">
                <v-list-item-icon>
                    <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    Contact
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
