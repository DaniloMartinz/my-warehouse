<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row>
  	  <v-col cols="12" md="8" offset-md="2">
        <v-card class="pa-2" outlined>
          <v-row no-gutters>
            <v-col cols="12" md="8">
              Panel
            </v-col>
            <v-col cols="12" md="4">
              <v-btn text color="primary">
                <NuxtLink class="text-decoration-none" to="/products">Available products for Sale</NuxtLink>
              </v-btn>
              <v-btn text color="primary">
                See all products
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
  name: 'IndexPage'
}
</script>
