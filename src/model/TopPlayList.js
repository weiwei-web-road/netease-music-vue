class TopPlayList {
    constructor(props) {
        // 数据处理

        this.id = props.id;
        this.name = props.name;
        this.coverImage = props.coverImgUrl;
        this.userName = props.creator.nickname;
        this.playCount = props.playCount;

    }

    // fromJS 是全局使用，所以写到原型链上面
    static fromJS = (value) => {
        // TODO
        // 处理原生数据，返回实例对象

        if (Array.isArray(value)) {
            return value.map((item) => new TopPlayList(item))
        } else {
            return new TopPlayList(value);
        }
    }

}


export default TopPlayList;