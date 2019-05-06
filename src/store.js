import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, FILTER, SET_TOP_PLAYLIST } from './mutation_types';
import fetchAPI, {apis} from './service';
import {TopPlayList} from './model';

Vue.use(Vuex)

export default new Vuex.Store({
  // state 中的数据 是全局静态数据，可以理解为 state 里的数据可以全局使用
  // 可以减少数据请求，因为同样的数据只需要在 state 中请求一次，全局便可以使用
  // 全局控制，跨组件协作，父子组件之间的协作
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

    // 对 state 中的 topPlayList 赋值 和 操作 
    [SET_TOP_PLAYLIST] (state, payload) {
      // 调用 TopPlayList Model 中的 fromJS 方法，按照构造函数中定义好的格式对原数据进行修改
      state.topPlayList = TopPlayList.fromJS(payload.value);
    }
  },
  actions: {
    // 用户触发

    // 异步，给后端发送HTTP请求获取数据
    fetchTopPlayListAsync (context, params) {
      // params view 层传递来的数据，idx: 榜单种类
      return new Promise((resolve, reject) => {
        console.log(params, params);
        // 调用 service index.js 中定义好的fetchAPI， 向后端发送请求
        fetchAPI(apis.home.getTopPlayList, params).then((res) => {
          if (res.status === 200 && res.data.code === 200) {
            // commit 是 提交action
            // 把从后端拿到的数据 给 type SET_TYPE_PLAYLIST, 
            // 然后在 mutation 中， 找到相应的 SET_TYPE_PLAYLIST, 对 Store 中的 state 中的topPlayList 数据进行修改
            context.commit({ type : SET_TOP_PLAYLIST, value : res.data.playlists})
          }
        }).catch((error) => {
          console.log(error);
          reject(JSON.stringify(error));
        });
      });
    },

    // ?
    incrementAsync (context, params) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit({ type: INCREMENT, value: params.value });
          resolve()
        }, 1000);
      })
    },
    // ?
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
