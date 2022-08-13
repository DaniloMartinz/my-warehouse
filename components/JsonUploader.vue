<template>
    <div>
        <v-btn class="ma-2" color="indigo" dark text>
            <label for="upload">
                <input type="file" @change="uploadFile" accept=".json" ref="fileUploader" style="display:none" id="upload">
                <v-icon dark>mdi-cloud-upload</v-icon>
            </label>
      </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file: null,
            content: null
        }
    },
    methods: {
        uploadFile(e) {
            let _this = this
            this.file = e.target.files[0];
            const reader = new FileReader();
            if (this.file.name.includes(".json")) {
                reader.onload = (res) => {
                    this.content = JSON.parse(res.target.result);
                    this.loadData(this.content)
                    _this.$refs.fileUploader.value = null
                };
                reader.onerror = (err) => console.log(err);
                reader.readAsText(this.file);
            } else {
                this.content = "File Output";
                reader.onload = (res) => {
                    console.log(res.target.result);
                };
            }
        },
        loadData(data) {
            if("inventory" in data ){
                this.loadArticles(data.inventory)
            }
            if("products" in data){
                this.loadProducts(data.products)
            } 
        },
        loadArticles(articles) {
            articles.forEach(art => {
                this.$store.dispatch('addArticle', art)
            });
        },
        loadProducts(products) {
            products.forEach(prod => {
                this.$store.dispatch('addProduct', prod)
            })
        }
    }
}
</script>