import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, FILTER, SET_TOP_PLAYLIST } from './mutation_types';
import fetchAPI, {apis} from './service';
import {TopPlayList} from './model';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    movies: [1,2,3,4,5,6,7,8],
    filterParams: '',
    topPlayList: []
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
   // mutation 对 store 数据的修改
  mutations: {
    [INCREMENT] (state, payload) {
      state.count += parseInt(payload.value);
    },
    [FILTER] (state, payload) {
      state.filterParams = parseInt(payload.value)
    },
    [SET_TOP_PLAYLIST] (state, payload) {
      state.topPlayList = TopPlayList.fromJS(payload.value);
    }
  },
  actions: {
    // 用户触发

    fetchTopPlayListAsync (context, params) {
      // params view 层传递来的数据，idx: 榜单种类
      return new Promise((resolve, reject) => {
        console.log(apis);
        fetchAPI(apis.home.getTopPlayList, params).then((res) => {
          if (res.status === 200 && res.data.code === 200) {
            // commit 是 提交action
            context.commit({ type : SET_TOP_PLAYLIST, value : res.data.playlists})
          }
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
