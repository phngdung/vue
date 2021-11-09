import Vue from "vue";
import Vuex from "vuex";

import students from "../mock/student";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    students: students,
  },
  getters: {
    students: (state) => state.students,
  },
  mutations: {
    editStudent({ id, classSt, name, math, english, literature } = {}) {
      students.forEach((val) => {
        if (val.id === id) {
          val.classSt = classSt;
          val.name = name;
          val.math = math;
          val.english = english;
          val.literature = literature;
        }
      });
    },
  },
});
