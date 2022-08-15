<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <Nuxt />  
    </v-main>
  </v-app>
</template>

<script>
  import JsonUploader from '~/components/JsonUploader.vue';
  import NavBar from '~/components/NavBar.vue';
  export default {
    components: {
      JsonUploader,
      NavBar
    }
  }
</script> 