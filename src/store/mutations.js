export default {
  onLoad(state) {
    state.loading = true; // eslint-disable-line no-param-reassign
  },
  unload(state) {
    state.loading = false; // eslint-disable-line no-param-reassign
  },
};
