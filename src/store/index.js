import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    matches: []
  },
  mutations: {
    fillMatches(store, data) {
      data.forEach((item, index) => {
        item.id = index;
      });

      store.matches = data;
    }
  },
  actions: {
    async getMatches(store) {
      const response = await fetch('https://www.scorebat.com/video-api/v1/');
      const data = await response.json();

      store.commit('fillMatches', data);
    }
  },
  getters: {
    getMatchById: (store) => (matchId) => {
      const defaultResult = { id: -1 };
      const matchFound = store.matches[matchId];

      return matchFound || defaultResult;
    }
  }
});
