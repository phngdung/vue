// import Student from './components/Student.vue';
// import StudentListVue from './components/StudentList.vue';
// export default [
//   { path: "/", component: StudentListVue, name: "student.list"},
//   { path: "/edit/:id", component: Student, name: "student.index" },
// ];

import Vue from "vue";
import VueRouter from "vue-router";
import Student from "./components/Student.vue";
import StudentListVue from "./components/StudentList.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: StudentListVue, name: "student.list" },
    { path: "/edit/:id", component: Student, name: "student.index" },
  ],
});
