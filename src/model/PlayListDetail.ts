import Track, { } from './Track';

interface ISongUrl {
  id: string;
  url: string;
}

export interface IPlayListRes {
  id: string;
  name: string;
  tags: string[];
  description: string;
  coverImgUrl: string;
  creator: {
    nickname: string;
    avatarUrl: string;
  },
  trackCount: number;
  playCount: number;
  tracks: any[];
  createTime: string;
  songUrlList: ISongUrl[],
  subscribers: {
    avatarUrl: string;
  }[],
}


class PlayListDetail {
  id: string;
  name: string;
  tags: string[];
  description: string;
  coverImgUrl: string;
  creatorNickName: string;
  creatorAvatarUrl: string;
  playCount: number;
  trackCount: number;
  tracks: Track[];
  createTime: string;
  songUrlMap: { [key: string]: string };
  subscribers: string[];
  constructor (props: IPlayListRes) {
      // 数据处理
      // 在构造函数里 定义本 class 的属性，
      this.id = props.id;
      this.name = props.name;
      this.tags = props.tags;
      this.description = props.description;
      this.coverImgUrl = props.coverImgUrl;
      this.creatorNickName = props.creator.nickname;
      this.creatorAvatarUrl = props.creator.avatarUrl;
      this.playCount = props.playCount;
      this.trackCount = props.trackCount;
      // this.tracks = props.tracks;
      this.tracks = Track.fromJS(props.tracks) as Track[];
      this.createTime = props.createTime;
      this.songUrlMap = props.songUrlList.reduce((prev: { [key: string]: string }, curr: ISongUrl) => {
          prev[curr.id] = curr.url;
          return prev;
      }, {});
      this.subscribers = props.subscribers.reduce((prev: string[], curr) => {
          prev.push(curr.avatarUrl);
          return prev;
      }, []);
  }

    // fromJS 是全局使用，所以写到原型链上面
    static fromJS = (value: IPlayListRes | IPlayListRes[]) => {
        // TODO
        // 处理原生数据，返回实例对象

        // 判断一个数组是否是数组的方法
        // 1. Array.isArray
        // 2. Object.prototype.toString.call(arr) === “[Object Array]”
        // 3. arr instanceOf Array
        // 4. arr.constructor === Array
        if (Array.isArray(value)) {
            return value.map((item) => new PlayListDetail(item));
        }
        return new PlayListDetail(value);

    }
}

export default PlayListDetail;
