import prefix from './getApiPrefix';

export default {
  getMyPlayList: {
    url: `${prefix}/user/playlist`,
    method: 'GET'
  },

  getPlayListDetail: {
    url: `${prefix}/playlist/detail`,
    method: 'GET'
  },

  getSongUrl: {
    url: `${prefix}/song/url`,
    method: 'GET'
  },
  getSongDetail: {
    url: `${prefix}/song/detail`,
    method: 'GET'
  },
  getLyric: {
    url: `${prefix}/lyric`,
    method: 'GET'
  }
}