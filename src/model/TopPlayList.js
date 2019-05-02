class TopPlayList {
    constructor(props) {
        console.log(props);
    }

}

// fromJS 是全局使用，所以写到原型链上面
TopPlayList.prototype.fromJS = () => {
    // TODO
    // 处理原生数据，返回实例对象
    return new TopPlayList({});
}

export default TopPlayList;