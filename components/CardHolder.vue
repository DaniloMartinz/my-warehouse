<template>
    <v-card>
        <v-toolbar color="teal lighten-3" dense>
            <v-icon>mdi-cart-heart</v-icon>
            <v-toolbar-title>Products</v-toolbar-title>
        </v-toolbar>
        <v-container fluid>
            <v-row v-if="products.length > 0">
                <v-col cols="12" md="4" sm="6" v-for="prod in products" :key="prod.name">
                    <v-card>
                        <v-img class="white--text align-end" height="200px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        src="https://www.ikea.com/es/en/images/products/lagkapten-adils-desk-white-black__1159362_pe888443_s5.jpg?f=xl"
                        >
                        <v-card-title>{{ prod.name }}</v-card-title>
                        </v-img>
                        <v-card-subtitle class="pb-0">Model</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <div>{{prod.price}} €</div>
                            <div>Velit aliquet sagittis id consectetur</div>
                        </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-badge color="green" :content="prod.current_stock" overlap inline bordered>
                                <v-btn color="teal" text :disabled="prod.current_stock < 1" @click="discardFromStock(prod)">Sell</v-btn>
                            </v-badge>
                        </v-card-actions>
                    </v-card>
                    
                </v-col> 
            </v-row>
            <v-row  v-else>
                <v-col cols="12">
                    <p class="text-center text--disabled">No data available</p>
                </v-col>
            </v-row>
           
        </v-container>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            header: "Products",
            content: null
        }
    },
    computed :{
        products() {
            this.$store.dispatch('updateProductStock')
            return this.$store.getters.getProductsList
        }
    },
    methods: {
        discardFromStock(item) {
            console.log(item)
        }
    }
}
</script>