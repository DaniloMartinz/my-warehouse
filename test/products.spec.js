import { shallowMount } from '@vue/test-utils'
import products from '@/pages/products.vue'
import vuetify from 'vuetify'
import Vue from 'vue'

describe('InventoryPage', ()=>{
    Vue.use(vuetify)

    test(' products is rendered', () => {
        const wrapper = shallowMount(products)
        expect(wrapper.exists()).toBe(true)
    })
})