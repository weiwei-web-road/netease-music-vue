export interface ITrackRes {
  id: string;
  name: string;
  author: string;
  dt: string;
  al: {
    name: string
  }
}

class Track {
  id: string;
  name: string;
  author: string;
  collection: string;
  durationTime: string; 
  constructor (props: ITrackRes) {
    // 数据处理
    // 在构造函数里 定义本 class 的属性
    this.id = props.id
    this.name = props.name
    this.author = props.author
    this.collection = props.al.name
    this.durationTime = props.dt
  }

    static fromJS = (value: ITrackRes | ITrackRes[]) => {
      if (Array.isArray(value)) {
        return value.map((item) => new Track(item))
      } else {
        return new Track(value)
      }
    }
}

export default Track
