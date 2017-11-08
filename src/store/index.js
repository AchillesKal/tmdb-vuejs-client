import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  a: 1,
};

export default new Vuex.Store({
  state,
});
