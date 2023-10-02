import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import router from "./router";
import Particles from "vue2-particles";

Vue.use(Particles);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
