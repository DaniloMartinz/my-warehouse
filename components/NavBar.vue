<template>
    <v-app-bar dense elevation="4" app>
        <v-toolbar-title>
            <NuxtLink to="/" class="text-decoration-none font-weight-bold">
                <v-icon color="primary">mdi-package-variant</v-icon> My Warehouse
            </NuxtLink>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <json-uploader label="Import data from Json" show-icon="true"></json-uploader>
    </v-app-bar>
</template>

<script>
export default {


}
</script>