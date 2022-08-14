<template>
    <v-card>
        <v-toolbar color="info" dark dense>
            <v-toolbar-title><v-icon>mdi-format-list-bulleted-square</v-icon>&nbsp;{{ header }}</v-toolbar-title>
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
            :items="items"
            :search="search"
        ></v-data-table>    
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    props: {
        header: String,
        headers: [],
        items: []
    } 
}
</script>