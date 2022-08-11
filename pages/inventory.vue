<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
  	  <v-col cols="12" md="8" offset-md="2">
        <articles-list></articles-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ArticlesList from '~/components/ArticlesList.vue';
  export default {
    components: {
      ArticlesList
    }
  }
</script> 