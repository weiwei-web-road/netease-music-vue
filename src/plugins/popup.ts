import Vue from 'vue';

// 可以选择使用npm来引入D3而不是在html中引入D3的源文件
const magnificPopup = typeof require === 'function' ? require('magnific-popup') : window.magnificPopup;
// const D3 = window.d3;

if (!magnificPopup) {
    throw new Error('[vue-magnificPopup] cannot locate magnificPopup');
}

Vue.use({
    'install': function (Vue) {
    // console.log('初始化magnificPopup', options);
        Vue.prototype.$magnificPopup = magnificPopup;
    }
});
