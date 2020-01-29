import Vue from 'vue'
import AudioComponent from '../components/Audio';

// 把audio组件AudioComponent挂载到Vue的div节点（#netease-music-player-node）上，并且使用$mount从virtual DOM 渲染到真正的DOM结构上
const $audio = new Vue({
  render: h => h(AudioComponent)  // 挂载到virtual DOM上面
}).$mount('#netease-music-player-node');  // 把virtual DOM渲染成真正的DOM节点

// 把上面定义的$audio 挂载到Vue实例的prototype原型上，所以全局都可以使用$audio 了
Vue.use({
  install: function (Vue, options) {
    // 第一种方式
    console.log(options, '初始化audioAPI');

    Vue.prototype.$audio = $audio;
  }
});