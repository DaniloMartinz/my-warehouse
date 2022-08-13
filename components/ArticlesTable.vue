<template>
    <v-card>
        <v-toolbar color="teal lighten-3" dense>
            <v-toolbar-title><v-icon>mdi-format-list-bulleted-square</v-icon> Inventary</v-toolbar-title>
        </v-toolbar>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="articles"
            :search="search"
        ></v-data-table>    
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            pageHeader: 'Articles',
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
            search: ''
        }
    },
    computed: {
        articles() {
            return this.$store.getters.getInventory
        }
    } 
}
</script>