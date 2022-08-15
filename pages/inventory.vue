<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
  	  <v-col cols="12" md="8" offset-md="2">
        <my-table :header="tableTitle" :headers="headers" :items="inventory"></my-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MyTable from '~/components/MyTable.vue'
  export default {
    components: {
      MyTable
    },
    data() {
        return {
            tableTitle: 'Inventory',
            headers: [
                {
                    text: 'Article Id',
                    align: 'start',
                    filterable: true,
                    value: 'art_id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Stock', value: 'stock' }
            ], 
        }
    },
    computed: {
        inventory() {
            return this.$store.getters.getInventory
        }
    }
  }
</script> 