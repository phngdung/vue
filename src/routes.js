// import Boy from './components/Boy.vue';
// import BoyListVue from './components/BoyList.vue';
// export default [
//   { path: "/", component: BoyListVue, name: "boy.list"},
//   { path: "/edit/:id", component: Boy, name: "boy.index" },
// ];

import Vue from "vue";
import VueRouter from "vue-router";
import Boy from "./components/Boy.vue";
import BoyListVue from "./components/BoyList.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: BoyListVue, name: "boy.list" },
    { path: "/edit/:id", component: Boy, name: "boy.index" },
  ],
});
