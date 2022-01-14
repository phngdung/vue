import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    boys: [],
  },
  getters: {
    boys: (state) => state.boys,
  },
  mutations: {
    editStudent(state,student_edit) {
      const { id, classSt, name, math, english, literature } = student_edit;
      state.boys.forEach((val) => {
        if (val.id === id) {
          val.classSt = classSt;
          val.name = name;
          val.math = math;
          val.english = english;
          val.literature = literature;
        }
      });
      localStorage.setItem('boys',JSON.stringify(state.boys))
    },
    initStudent(boys){
      state.boys = boys;
    }
  },
});
