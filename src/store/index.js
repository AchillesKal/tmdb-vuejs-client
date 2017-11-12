import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
  loading: true,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
