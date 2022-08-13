<template>
    <v-app-bar dense elevation="4" app>
        <v-toolbar-title>
            <NuxtLink to="/" class="text-decoration-none font-weight-bold">
                <v-icon>mdi-package-variant</v-icon> My Warehouse
            </NuxtLink>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <json-uploader></json-uploader>
    </v-app-bar>
</template>

<script>
export default {


}
</script>