<template>
    <v-card>
        <v-toolbar color="cyan" dark dense>
            <v-toolbar-title><v-icon>mdi-format-list-bulleted-square</v-icon> Inventary</v-toolbar-title>
        </v-toolbar>
        <v-list three-line>
            <v-subheader v-text="header"></v-subheader>
            <v-divider></v-divider>
            <template v-for="(art, key, index) in articles">
                <v-list-item>
                    <v-list-item-avatar><v-icon color="cyan">mdi-sofa-single-outline</v-icon></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>Id#: <span class="grey--text text--lighten">{{ art.art_id }}</span></v-list-item-title>
                        <v-list-item-subtitle>Article: <span class="grey--text text--lighten">{{ art.name }}</span></v-list-item-subtitle>
                        <v-list-item-subtitle>Stock: <span class="grey--text text--lighten">{{ art.stock }}</span></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider v-show=" key < articles.length - 1" inset></v-divider>
            </template>
        </v-list>        
    </v-card>

</template>

<script>
export default {
    data() {
        return {
            header: "Articles",
            content: null
        }
    },
    computed: {
        articles() {
            return this.$store.getters.getInventory
        }
    } 
}
</script>