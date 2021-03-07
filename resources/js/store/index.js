import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persistedstate'

Vue.use(Vuex)

const DataPersistence = VuexPersistence({
    key: 'TechoStorage',
    paths: ['']
})

const Store = new Vuex({
    modules: [

    ],
    plugins: [DataPersistence]
})

export default Store
