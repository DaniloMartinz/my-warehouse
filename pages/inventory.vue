<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
  	  <v-col cols="12" md="8" offset-md="2">
        <articles-table></articles-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ArticlesTable from '~/components/ArticlesTable.vue';
  export default {
    components: {
      ArticlesTable
    }
  }
</script> 