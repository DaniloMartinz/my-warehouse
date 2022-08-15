<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
  	  <v-col cols="12" md="10" offset-md="1">
        <v-card class="pa-2" outlined>
          <v-row no-gutters>
            <v-col cols="12" md="8" sm="8">
              <v-carousel hide-delimiters :show-arrows="false" cycle>
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"></v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" md="4" sm="4" align-self="center">
              <v-btn text color="primary" block>
                <NuxtLink class="text-decoration-none" to="/products">Available products for Sale</NuxtLink>
              </v-btn>
              <v-btn text color="primary" block>
                <NuxtLink class="text-decoration-none" to="/inventory">See Inventory</NuxtLink>
              </v-btn>
              <v-btn text color="primary" block>
                <NuxtLink class="text-decoration-none" to="/soldProducts">See Sold Products</NuxtLink>
              </v-btn>
            </v-col>
          </v-row>      
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      items: [
          {
            src: 'https://www.ikea.com/es/en/images/products/vedbo-dining-table-white__0815092_pe772753_s5.jpg?f=s',
          },
          {
            src: 'https://c.media.kavehome.com/kh-web/media/catalog/product/A/0/A000001467_1-20211006071750.jpg?tx=w_1900,c_fill,ar_0.8',
          },
          {
            src: 'https://www.ikea.com/ae/en/images/products/nordviken-roenninge-table-and-4-chairs-white-birch__0797743_pe767001_s5.jpg?f=xl',
          }]
    }
  }
}
</script>
