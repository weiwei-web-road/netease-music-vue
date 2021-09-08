import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import './plugins/element';

Vue.use(Router);

// router, default is home page
export default new Router({
    'mode': 'history',
    'base': process.env.BASE_URL,
    'routes': [
        {
            'path': '/',
            // 通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。
            'name': 'home',
            'component': Home
        },
        {
            'path': '/playlistDetail/:id',
            'name': 'playlistDetail',
            'component': async () => await import(/* webpackChunkName: "about" */ './views/PlayListDetail/index.vue')
        },
        {
            'path': '/about',
            'name': 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            'component': async () => await import(/* webpackChunkName: "about" */ './views/About/About.vue')
        },
        {
            'path': '/my_music',
            'name': 'my_music',
            // 把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。
            // Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。
            'component': async () => await import(/* webpackChunkName: "mymusic" */ './views/MyMusic/MyMusic.vue')
        },
        {
            'path': '/personal',
            'name': 'personal',
            'component': async () => await import(/* webpackChunkName: "personal" */ './views/Personal/index.vue')
        },
        {
            'path': '/temp',
            'name': 'temp',
            'component': async () => await import(/* webpackChunkName: "temp" */ './views/Temp/index.vue')
        },
        {
            'path': '/d3',
            'name': 'd3',
            'component': async () => await import(/* webpackChunkName: "d3" */ './views/D3/index.vue')
        },
        {
            'path': '/practice',
            'name': 'practice',
            'component': async () => await import('./views/PracticeVue/index.vue')
        }
    ]
});
