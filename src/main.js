import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Element from "element-ui";
import VueCookies from "vue-cookies";
import Vuelidate from 'vuelidate'


Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(Vuelidate)

import { router } from "./routes";
import { store } from "./store";
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
