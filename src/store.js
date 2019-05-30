import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, FILTER, SET_TOP_PLAYLIST, SET_TOTAL_PLAY, SET_MY_PLAYLIST, SET_MY_PLAYLIST_DETAIL } from './mutation_types';
import fetchAPI, {apis} from './service';
import {TopPlayList, MyPlayList, PlayListDetail} from './model';

Vue.use(Vuex)

export default new Vuex.Store({
  // state 中的数据 是全局静态数据，可以理解为 state 里的数据可以全局使用
  // 可以减少数据请求，因为同样的数据只需要在 state 中请求一次，全局便可以使用
  // 全局控制，跨组件协作，父子组件之间的协作
  state: {
    count: 0,
    movies: [1,2,3,4,5,6,7,8],
    filterParams: '',
    topPlayList: [],
    totalPlay: 0,
    myPlayList: [],
    myPlayListDetail : {},
    rendermyPlayListDetail: false
  },
  // 派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。
  // 就和vue的computed差不多；
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
  //  提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。
  //  第一个参数默认是state。和vue中的methods类似。
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
    },

    [SET_TOTAL_PLAY] (state, payload) {
      state.totalPlay = parseInt(payload.value);
    },

    // 对 state 中的 myPlayList 赋值 和 操作 
    [SET_MY_PLAYLIST] (state, payload) {
      // 调用 MyPlayList Model 中的 fromJS 方法，按照构造函数中定义好的格式对原数据进行修改
      state.myPlayList = MyPlayList.fromJS(payload.value);
    },
    [SET_MY_PLAYLIST_DETAIL] (state, payload) {
      state.myPlayListDetail = PlayListDetail.fromJS(payload.value);
      // 定义全局变量 rendermyPlayListDetail ，用来控制等数据加载完成之后再渲染页面
      state.rendermyPlayListDetail = true;
      console.log(state.myPlayListDetail, 'my play list detail');
    }
  },
  // 和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。
  actions: {
    // 用户触发

    // 异步，给后端发送HTTP请求获取数据
    fetchTopPlayListAsync (context, params) {
      // params view 层传递来的数据，idx: 榜单种类
      return new Promise((resolve, reject) => {
        // 调用 service index.js 中定义好的fetchAPI， 向后端发送请求
        fetchAPI(apis.home.getTopPlayList, params).then((res) => {
          if (res.status === 200 && res.data.code === 200) {
            // commit 是 提交action
            // 把从后端拿到的数据 给 type SET_TYPE_PLAYLIST, 
            // 然后在 mutation 中， 找到相应的 SET_TYPE_PLAYLIST, 对 Store 中的 state 中的topPlayList 数据进行修改
            context.commit({ type : SET_TOP_PLAYLIST, value : res.data.playlists});
            context.commit({ type : SET_TOTAL_PLAY, value : res.data.total});
          }
        }).catch((error) => {
          console.log(error);
          reject(JSON.stringify(error));
        });
      });
    },

    fetchMyPlayListAsync (context, params) {
      return new Promise((resolve, reject) => {
        fetchAPI(apis.myMusic.getMyPlayList, params).then((res) => {
          if (res.status === 200 && res.data.code === 200) {
            context.commit({type: SET_MY_PLAYLIST, value : res.data.playlist});
            console.log(res.data.playlist[0].id, 'first play list id');
            resolve({id: res.data.playlist[0].id});
          }
        }).catch((error) => {
          reject(JSON.stringify(error));
        });
      });
    },

    fetchMyPlayListDetailAsync (context, params) {
      return new Promise((resolve, reject) => {
        fetchAPI(apis.myMusic.getPlayListDetail, params).then((res) => {
          if (res.status === 200 && res.data.code === 200) {
            context.commit({type: SET_MY_PLAYLIST_DETAIL, value: res.data.playlist});
          }
        }).catch((error) => {
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
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit({ type: FILTER, value: params.value });
          resolve()
        }, 1000);
      })
    }
  }
})
