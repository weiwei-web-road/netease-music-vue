import { createStore } from 'vuex';
import { INCREMENT, FILTER, SET_TOP_PLAYLIST, SET_TOTAL_PLAY, SET_MY_PLAYLIST, SET_MY_PLAYLIST_DETAIL, SET_PLAYING_SONG, SET_IS_PLAYING, SET_LYRIC, SET_RECOMMAND_ALBUMS } from './mutation_types';
import fetchAPI, { apis } from './service';
import { TopPlayList, MyPlayList, PlayListDetail } from './model';
import { IAlbumDetail } from './model/MusicSuggestion';

export interface IState {
  count: number;
  movies: number[];
  filterParams: number;
  topPlayList: TopPlayList[];
  totalPlay: number;
  myPlayList: MyPlayList[];
  myPlayListDetail: PlayListDetail | Record<string, any>;
  rendermyPlayListDetail: boolean;
  playingSong: any;
  initPlay: {
    isPlaying: boolean,
    showSongList: boolean
  };
  lyric: any;
  recommandAlbums: IAlbumDetail[];
}

export default createStore({
    // state 中的数据 是全局静态数据，可以理解为 state 里的数据可以全局使用
    // 可以减少数据请求，因为同样的数据只需要在 state 中请求一次，全局便可以使用
    // 全局控制，跨组件协作，父子组件之间的协作
    'state': {
        'count': 0,
        'movies': [1, 2, 3, 4, 5, 6, 7, 8],
        'filterParams': 1,
        'topPlayList': [],
        'totalPlay': 0,
        'myPlayList': [],
        'myPlayListDetail': {},
        'rendermyPlayListDetail': false,
        'playingSong': {
            'id': 34341349,
            'src': 'http://m10.music.126.net/20200131164944/8f281094c335148f33850c3dd7119d0c/ymusic/2daf/1b31/d403/e468cdf69e22118e4ad9b83bf53bf05f.mp3',
            'coverImgUrl': '',
            'songName': '',
            'playListId': '',
            'author': ''
        },
        'initPlay': {
            'isPlaying': true,
            'showSongList': false
        },
        'lyric': {},
        'recommandAlbums': []
    } as IState,
    // 派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。
    // 就和vue的computed差不多；
    'getters': {
        'singleMovies': (state) => (filterNumber: number) => {
            return state.movies.filter(item => item % filterNumber);
        },
        'filterMovies': (state) => {
            if (state.filterParams) {
                return state.movies.filter(item => item % state.filterParams);
            }
            return state.movies;
        }
    },
    // mutation 对 store 数据的修改
    //  提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。
    //  第一个参数默认是state。和vue中的methods类似。
    'mutations': {
        [INCREMENT] (state, payload) {
            state.count += parseInt(payload.value, 10);
        },
        [FILTER] (state, payload) {
            state.filterParams = parseInt(payload.value, 10);
        },

        // 对 state 中的 topPlayList 赋值 和 操作
        [SET_TOP_PLAYLIST] (state, payload) {
            // 调用 TopPlayList Model 中的 fromJS 方法，按照构造函数中定义好的格式对原数据进行修改
            state.topPlayList = TopPlayList.fromJS(payload.value) as TopPlayList[];
        },

        [SET_TOTAL_PLAY] (state, payload) {
            state.totalPlay = parseInt(payload.value, 10);
        },

        // 对 state 中的 myPlayList 赋值 和 操作
        [SET_MY_PLAYLIST] (state, payload) {
            // 调用 MyPlayList Model 中的 fromJS 方法，按照构造函数中定义好的格式对原数据进行修改
            state.myPlayList = MyPlayList.fromJS(payload.value) as MyPlayList[];
        },
        [SET_MY_PLAYLIST_DETAIL] (state, payload) {
            state.myPlayListDetail = PlayListDetail.fromJS(payload.value);
            // 定义全局变量 rendermyPlayListDetail ，用来控制等数据加载完成之后再渲染页面
            state.rendermyPlayListDetail = true;
        },
        [SET_PLAYING_SONG] (state, payload) {
            state.playingSong = payload.value;
        },
        [SET_IS_PLAYING] (state, payload) {
            state.initPlay = payload.value;
        },
        [SET_LYRIC] (state, payload) {
            const value = payload.value,
                lyric = value.split(/\r?\n/).map((item: string) => {
                    const index = item.indexOf(']'),
                        timeArr = item.slice(1, index).split(':'),
                        time = timeArr.length === 2 ? Number(timeArr[0]) * 60 + Math.floor(Number(timeArr[1])) : 0,
                        content = item.slice(index + 1);

                    return {
                        time,
                        content
                    };
                });

            state.lyric = lyric;
        },
        [SET_RECOMMAND_ALBUMS](state, payload) {
            state.recommandAlbums = payload;
        }
    },
    // 和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。
    'actions': {
    // 用户触发

        // 异步，给后端发送HTTP请求获取数据
        async fetchTopPlayListAsync (context, params) {
            // params view 层传递来的数据，idx: 榜单种类
            return await new Promise((resolve, reject) => {
                // 调用 service index.js 中定义好的fetchAPI， 向后端发送请求
                fetchAPI(apis.home.getTopPlayList, params).then((res) => {
                    if (res.status === 200 && res.data.code === 200) {
                        // commit 是 提交action
                        // 把从后端拿到的数据 给 type SET_TYPE_PLAYLIST,
                        // 然后在 mutation 中， 找到相应的 SET_TYPE_PLAYLIST, 对 Store 中的 state 中的topPlayList 数据进行修改
                        context.commit({ 'type': SET_TOP_PLAYLIST, 'value': res.data.playlists });
                        context.commit({ 'type': SET_TOTAL_PLAY, 'value': res.data.total });
                    }
                }).catch((error) => {
                    console.log(error);
                    reject(JSON.stringify(error));
                });
            });
        },

        async fetchMyPlayListAsync (context, params) {
            return await new Promise((resolve, reject) => {
                fetchAPI(apis.myMusic.getMyPlayList, params).then((res) => {
                    if (res.status === 200 && res.data.code === 200) {
                        context.commit({ 'type': SET_MY_PLAYLIST, 'value': res.data.playlist });
                        resolve({ 'id': res.data.playlist[0].id });
                    }
                }).catch((error: Error) => {
                    reject(JSON.stringify(error));
                });
            });
        },

        async fetchMyPlayListDetailAsync (context, params) {
            return await new Promise((resolve, reject) => {
                fetchAPI(apis.myMusic.getPlayListDetail, params).then((res) => {
                    if (res.status === 200 && res.data.code === 200) {
                        const trackIds = res.data.playlist.trackIds.map((item: { id: string }) => item.id).join(','),
                            songUrlParam = { 'id': trackIds },
                            playListDetailRes = res.data.playlist;

                        fetchAPI(apis.myMusic.getSongUrl, songUrlParam).then((subRes) => {
                            if (subRes.status === 200 && subRes.data.code === 200) {
                                const combineRes = Object.assign({}, playListDetailRes, { 'songUrlList': subRes.data.data });

                                context.commit({ 'type': SET_MY_PLAYLIST_DETAIL, 'value': combineRes });
                            }
                        });
                    }
                }).catch((error: Error) => {
                    reject(JSON.stringify(error));
                });
            });
        },

        async fetchRecommandAlbum (context, params) {
            const res = await fetchAPI(apis.musicSuggestion.getRecoomandResource, params);

            console.log(res, 'res');
        },

        getPlayingSongInfo (context, params) {
            context.commit({ 'type': SET_PLAYING_SONG, 'value': params });
        },

        updateIsPlaying (context, params) {
            context.commit({ 'type': SET_IS_PLAYING, 'value': params });
        },

        async getLyric (context, params) {
            return await new Promise((resolve, reject) => {
                fetchAPI(apis.myMusic.getLyric, params).then((res) => {
                    if (res.status === 200 && res.data.code === 200) {
                        context.commit({ 'type': SET_LYRIC, 'value': res.data.lrc ? res.data.lrc.lyric : '' });
                    }
                }).catch((error: Error) => {
                    console.log(error);
                    reject(JSON.stringify(error));
                });
            });
        },

        // ?
        async incrementAsync (context, params) {
            return await new Promise((resolve) => {
                setTimeout(() => {
                    context.commit({ 'type': INCREMENT, 'value': params.value });
                    resolve({});
                }, 1000);
            });
        },
        // ?
        async filterAsync (context, params) {
            return await new Promise((resolve) => {
                setTimeout(() => {
                    context.commit({ 'type': FILTER, 'value': params.value });
                    resolve({});
                }, 1000);
            });
        }
    }
});
