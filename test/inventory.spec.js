import { shallowMount } from '@vue/test-utils'
import inventory from '@/pages/inventory.vue'
import vuetify from 'vuetify'
import Vuex from 'vuex'
import Vue from 'vue'

describe('InventoryPage', ()=>{
    Vue.use(vuetify)
    Vue.use(Vuex)
    let getters
    let store

    beforeEach(() =>{
        getters = {
            _inventary: ()=> []
        }
        store = new Vuex.Store({
            getters
        })
    })
   
    test(' myTable is imported', () => {
        const wrapper = shallowMount(inventory, { store })
        expect(wrapper.exists()).toBe(true)
    })
})