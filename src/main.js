import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import HelloWorld from './components/HelloWorld.vue'
const routes = [
    { path: "/", component: HelloWorld },
    { path: "/about", component: About },
    { path: "/home", component: Home },
];

const router = new VueRouter({
    routes,
});
new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
