import { createApp } from 'vue';
// AudioEventBus 是Vue 中组件间传递数据之 EventBus的设计机制
// 利用了Vue中内置的 emit on 事件发射与监听机制，使不同组件之前可以传递数据
import AudioEventBus from '../components/Audio.vue';

// 把audio组件AudioComponent挂载到Vue的div节点（#netease-music-player-node）上，并且使用$mount从virtual DOM 渲染到真正的DOM结构上
const $audio = createApp(AudioEventBus as any);

$audio.mount('#netease-music-player-node'); // 把virtual DOM渲染成真正的DOM节点

// 把上面定义的$audio 挂载到Vue实例的prototype原型上，所以全局都可以使用$audio 了
export default $audio;
