import home from './home';

// home 是个缩写
// 打印 apis 时，会按照此格式打印
// {
    // home : {
    //             getTopPlayList : {
    //                 method : get,
    //                 url : 'url'
    //             }
    //         }
    // }
export default Object.assign({}, {home});

// 统一对外的API出口