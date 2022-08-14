import { shallowMount } from '@vue/test-utils'
import MyTable from '@/components/MyTable'
import vuetify from 'vuetify'
import Vue from 'vue'

describe('Mytable', ()=>{
    Vue.use(vuetify)
    test(' table is rendered', () => {
        const wrapper = shallowMount(MyTable, {
            propsData: {
                header: 'Test table',
                headers: [],
                items: []
            }
        })
        expect(wrapper.props().header).toBe('Test table')
    })
})