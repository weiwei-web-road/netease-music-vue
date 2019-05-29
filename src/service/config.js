import home from './home';
import myMusic from './myMusic';

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
export default Object.assign({}, {home, myMusic});
// export default Object.assign({}, {myMusic});
// 统一对外的API出口