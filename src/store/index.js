import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quests: [1,2,3,4,5,6,7,8]
  },
  getters: {
    getQuests(state) {
      return state.quests;
      // return this.state.quests;
    }
  },
  mutations: {
    deleteQ(state,payload='0'){
      // console.log(this.getters.getQuests,'DO');
      // delete state.quests[payload]
      state.quests.splice(payload,1)
      console.log(this.getters.getQuests,'After');
    },
    addQ(state){
      state.quests.push('BUM')
      console.log(state.quests);
    }
  },
  actions: {
    deleteQ({commit}){
      console.log('ACTION');
      commit('deleteQ')
    }
  },
  modules: {}
});
