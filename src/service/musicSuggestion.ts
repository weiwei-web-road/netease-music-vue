import prefix from './getApiPrefix';

export default {
    // 获取圆形图标列表
    'getDragonBall': {
        'url': `${prefix}/user/playlist`,
        'method': 'GET'
    },
    // 新碟上架列表
    'getTopAlbum': {
        'url': `${prefix}/top/album`,
        'method': 'GET'
    },
    // 获取热门推荐歌单
    'getRecoomandResource': {
        'url': `${prefix}/recommend/resource`,
        'method': 'GET'
    }
};
