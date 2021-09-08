import Vue from 'vue';

// 可以选择使用npm来引入D3而不是在html中引入D3的源文件
const D3 = typeof require === 'function' ? require('d3') : window.d3;
// const D3 = window.d3;

if (!D3) {
    throw new Error('[vue-d3] cannot locate d3');
}

Vue.use({
    'install': function ($vue) {
    // console.log('初始化D3', options);
        $vue.prototype.$d3 = D3;
    }
});
