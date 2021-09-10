import { createApp } from 'vue';
import App from './App.vue';
import moment from 'moment';
import router from './router';
import store from './store';
// 可以使用plugin 把新的 Vue实例挂载到 Vue原型上，这样每次实例化的时候，Vue实例都有这个属性
// 或者也可以在Vue 实例化之后，再挂载到Vue根实例上，这样每次实例化，都需要再重新挂载
import ElementUI from 'element-plus';
import 'element-plus/dist/index.css';
import $audio from '@/plugins/audio';

const app = createApp(App as any);

app.use(store);
app.use(router);
app.use(ElementUI);
app.config.globalProperties.$filters = {
    'dateformat': function (dataStr: string, pattern = 'YYYY-MM-DD HH:mm:ss') {
        return moment(dataStr).format(pattern);
    }
};

// // 可以选择使用npm来引入D3而不是在html中引入D3的源文件
// const magnificPopup = typeof require === 'function' ? require('magnific-popup') : window.magnificPopup;
// // const D3 = window.d3;

// if (!magnificPopup) {
//     throw new Error('[vue-magnificPopup] cannot locate magnificPopup');
// }

// app.config.globalProperties.$magnificPopup = magnificPopup;
app.config.globalProperties.$audio = $audio;
app.mount('#app');

// // moment 用来管理时间格式 在Vue3中已经被废止
// Vue.filter('dateformat', function (dataStr: string, pattern = 'YYYY-MM-DD HH:mm:ss') {
//     return moment(dataStr).format(pattern);
// });
