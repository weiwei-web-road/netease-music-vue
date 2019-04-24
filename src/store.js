import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, FILTER } from './mutation_types';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    movies: [1,2,3,4,5,6,7,8],
    filterParams: ''
  },
  getters: {
    singleMovies: (state) => (filterNumber) => {
      return state.movies.filter(item => item % filterNumber)
    },
    filterMovies: (state) => {
      if (state.filterParams) {
        return state.movies.filter(item => item % state.filterParams)
      }
      return state.movies;
    }
  },
  mutations: {
    [INCREMENT] (state, payload) {
      state.count += parseInt(payload.value);
    },
    [FILTER] (state, payload) {
      state.filterParams = parseInt(payload.value)
    }
  },
  actions: {
    incrementAsync (context, params) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit({ type: INCREMENT, value: params.value });
          resolve()
        }, 1000);
      })
    },
    filterAsync (context, params) {
      console.log('action', params);
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit({ type: FILTER, value: params.value });
          resolve()
        }, 1000);
      })
    }
  }
})
