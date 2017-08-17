import Vue from 'vue'
import VueX from 'vuex'

import ApiService from './ApiService'

Vue.use(VueX);
export default new VueX.Store({
    ApiService
})