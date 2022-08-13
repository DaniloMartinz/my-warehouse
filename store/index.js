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
        let i = state._inventory.findIndex((el)=> el.name === prod.name)
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
        return state._products
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
    }
}