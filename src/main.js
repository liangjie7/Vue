// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'

import store from './store'
//图片懒加载
Vue.use(VueLazyload, {
    error: require('./assets/loading.svg'),
    loading: require('./assets/loading.svg'),
    attempt: 1
});
//vue的ajax
Vue.use(VueResource)
    //vue的轮播图
Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI);


Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});