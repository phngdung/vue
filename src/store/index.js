import Vue from "vue";
import Vuex from "vuex";

import students_mock from "../mock/student";
if (!localStorage.getItem("students"))
  localStorage.setItem("students", JSON.stringify(students_mock));
const students = JSON.parse(localStorage.getItem("students"));
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    students: students,
  },
  getters: {
    students: (state) => state.students,
  },
  mutations: {
    editStudent(state,student_edit) {
      const { id, classSt, name, math, english, literature } = student_edit;
      state.students.forEach((val) => {
        if (val.id === id) {
          val.classSt = classSt;
          val.name = name;
          val.math = math;
          val.english = english;
          val.literature = literature;
        }
      });
      localStorage.setItem('students',JSON.stringify(state.students))
    },
  },
});
