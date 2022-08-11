export const state = () => ({
    _inventory: [],
    _products: []
})

export const getters = {
    getInventory(state) {
        return state._inventory    
    },
    getProductsList(state) {
        return state._products
    }
}

export const mutations = {
    addArticle(state, art) {
        let i = state._inventory.findIndex((el) => el.art_id === art.art_id)
        if(i < 0 ){
            state._inventory.push(art)
        } else {
            let n = parseInt(state._inventory[i]["stock"] + art.stock)
            state._inventory[i]["stock"] = n
        }
        console.log(state._inventory)
    }
}

export const actions = {
    addArticle(context, art) {
        context.commit('addArticle', art)
    }
}