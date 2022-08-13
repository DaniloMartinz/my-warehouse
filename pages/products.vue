<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
  	  <v-col cols="12" md="8" sm="10" offset-sm="1" offset-md="2">
        <card-holder></card-holder>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import CardHolder from '~/components/CardHolder.vue';
  export default {
    components: {
      CardHolder
    }
  }
</script> 