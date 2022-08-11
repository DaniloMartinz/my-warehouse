<template>
    <input type="file" @change="uploadFile" accept=".json">
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
            this.file = e.target.files[0];
            const reader = new FileReader();
            if (this.file.name.includes(".json")) {
                reader.onload = (res) => {
                    this.content = JSON.parse(res.target.result);
                    this.loadArticles(this.content.inventory)
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
        loadArticles(articles) {
            console.log(articles);
            articles.forEach(art => {
                this.$store.dispatch('addArticle', art)
            });
        }
    }
}
</script>