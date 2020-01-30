import Vue from 'vue'
import AudioComponent from '../components/Audio';

const $audio = new Vue({
  render: h => h(AudioComponent)
}).$mount('#netease-music-player-node');

Vue.use({
  install: function (Vue, options) {
    // 第一种方式
    console.log(options, '初始化audioAPI');

    Vue.prototype.$audio = $audio;
  }
});