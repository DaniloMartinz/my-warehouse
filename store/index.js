export const state = () => ({
    _inventory: [],
    _products: [],
    _sales:[]
})

export const getters = {
    getInventory(state) { //NOSONAR
        return state._inventory    
    },
    getProductsList(state) { //NOSONAR
        return state._products
    },
    getSales(state) { //NOSONAR
        return state._sales    
    }
}

export const mutations = {
    addArticle(state, art) { //NOSONAR
        let i = state._inventory.findIndex((el) => el.art_id === art.art_id)
        if(i < 0 ){
            state._inventory.push(art)
        } else {
            let n = parseInt(state._inventory[i]["stock"]) + parseInt(art.stock)
            state._inventory[i]["stock"] = n
        }
    },
    addProduct(state, prod) { //NOSONAR
        let i = state._products.findIndex((el)=> el.prod_id === prod.prod_id)
        if (i < 0){
            state._products.push(prod)
        }
    },
    updateProductStock(state) { //NOSONAR
        state._products.map((prod) => {
            let arr = prod.contain_articles.map((cArt, index, prodArray) =>{
                let i = state._inventory.findIndex((el) => el.art_id === cArt.art_id)
                return ( i >= 0 ? Math.floor(state._inventory[i]["stock"]/prodArray[index]["amount_of"]) : 0)
            })
            prod["current_stock"] = Math.min.apply(Math, arr)
        })
    },
    removeArticleFromStock(state, item) { //NOSONAR
        let i = state._inventory.findIndex((el) => el.art_id === item.art_id)
        let n = parseInt(state._inventory[i]["stock"]) - parseInt(item.amount_of)
        state._inventory[i]["stock"] = n
    },
    addProductToSales(state, prod) { //NOSONAR
        let i = state._sales.findIndex((el)=> el.prod_id === prod.prod_id)
        if(i < 0) {
            prod["sold"] = 1
            state._sales.push(prod)
        } else {
            state._sales[i]["sold"]++
        }
    }
}

export const actions = {
    addArticle(context, art) {
        context.commit('addArticle', art)
    },
    addProduct(context, prod) {
        context.commit('addProduct', prod)
    },
    updateProductStock(context) {
        context.commit('updateProductStock')
    },
    removeArticleFromStock(context, item) {
        context.commit('removeArticleFromStock', item)
    },
    addProductToSales(context, prod) {
        context.commit('addProductToSales', prod)
    }
}