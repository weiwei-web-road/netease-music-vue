export const prefix = 'http://localhost:3000'

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