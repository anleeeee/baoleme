/*
    入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// var Swiper = require('swiper'); 

new Vue({
    el: '#app',
    render: h => h(App),
    router
})