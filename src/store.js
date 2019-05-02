import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, FILTER } from './mutation_types';
import fetchAPI, {apis} from './service';

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
    // 用户触发

    fetchTopPlayListAsync (context, params) {
      // params view 层传递来的数据，idx: 榜单种类
      return new Promise((resolve, reject) => {
        fetchAPI(apis.home.getTopPlayList, params).then((res) => {
          console.log(res, res);
        }).catch((error) => {
          console.log(error);
          reject(JSON.stringify(error));
        });
      });
    },

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
