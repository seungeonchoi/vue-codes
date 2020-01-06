import Vue from "vue";
import Vuex from "vuex";
import Car from "../domain/Car";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    info: {
      data: null
    }
  },
  mutations: {
    createCar(state) {
      state.info.data = new Car();
    }
  },
  actions: {}
});
