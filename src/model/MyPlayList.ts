export interface IPlayListRes {
  id: string;
  name: string;
  tags: string[];
  coverImgUrl: string;
  creator: {
    nickname: string;
  },
  trackCount: number;
}


class MyPlayList {
  id: string;
  name: string;
  tags: string[];
  coverImgUrl: string;
  creatorNickName: string;
  trackCount: number;
  constructor (props: IPlayListRes) {
      // 数据处理
      // 在构造函数里 定义本 class 的属性，
      this.id = props.id;
      this.name = props.name;
      this.tags = props.tags;
      this.coverImgUrl = props.coverImgUrl;
      this.creatorNickName = props.creator.nickname;
      this.trackCount = props.trackCount;
  }

    // fromJS 是全局使用，所以写到原型链上面
    static fromJS = (value: IPlayListRes | IPlayListRes[]) => {
        // TODO
        // 处理原生数据，返回实例对象

        if (Array.isArray(value)) {
            return value.map((item) => new MyPlayList(item));
        }
        return new MyPlayList(value);

    }
}

export default MyPlayList;
