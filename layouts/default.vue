<template>
  <v-app>
    <v-app-bar dense elevation="4" app>
      <v-toolbar-title>
        <NuxtLink to="/">My Warehouse</NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text small>
        <v-icon>mdi-file-import-outline</v-icon>Import products
      </v-btn>|
      <json-uploader></json-uploader>
      <v-btn text small>Import articles</v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />  
    </v-main>
  </v-app>
</template>

<script>
  import JsonUploader from '~/components/JsonUploader.vue';
  export default {
    components: {
      JsonUploader
    }
  }
</script> 