import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;


import VueRouter from "vue-router";
import Particles from 'vue2-particles';

Vue.use(VueRouter).use(Particles)

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import NotFound from './components/NotFound.vue';
const routes = [
    { path: "/", redirect: '/home' },
    { path: "/about", component: About },
    { path: "/home", component: Home },
    { path: "*", component: NotFound },
];

const router = new VueRouter({
    routes,
});
new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
