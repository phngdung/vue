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
import Register from "./components/Register.vue";
import SignIn from "./components/SignIn.vue";

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    { path: "/", component: Register, name: "register" },
    { path: "/signin", component: SignIn, name: "signin" },
    { path: "/list-boy", component: BoyListVue, name: "boy.list" },
    { path: "/add", component: Boy, name: "boy.add" },
    { path: "/edit/:id", component: Boy, name: "boy.index" },
    { path: "/register", component: Register, name: "register" },
  ],
});
