<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
  	  <v-col cols="12" md="8" offset-md="2">
        <my-table :header="tableTitle" :headers="headers" :items="productsSold"></my-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MyTable from '~/components/MyTable.vue';
  export default {
    components: {
      MyTable
    },
    data() {
        return {
            tableTitle: 'Sold Products',
            headers: [
                {
                    text: 'Product Id',
                    align: 'start',
                    filterable: true,
                    value: 'prod_id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Qty Sold', value: 'sold' },
                { text: 'Unit. Price', value: 'price' }
            ],
        }
    },
    computed: {
        productsSold() {
            return this.$store.getters.getSales
        }
    } 
  }
</script> 