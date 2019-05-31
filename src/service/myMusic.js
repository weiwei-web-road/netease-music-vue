import prefix from './getApiPrefix';

export default {
  getMyPlayList: {
    url: `${prefix}/user/playlist`,
    method: 'GET'
  },

  getPlayListDetail: {
    url: `${prefix}/playlist/detail`,
    method: 'GET'
  }
}