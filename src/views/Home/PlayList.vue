<style lang="less" scoped>
  .music-card-layout {
    border-top: 2px solid #c20c0c;
    > .card-row {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 188px;
      > .card-column {
        width: 140px;
        > .playlist-cover-image {
          width: 100%;
          height: 140px;
          display: block;
          border-radius: 2px;
          position: relative;
          overflow: hidden; // 保留radius
          > img {
            width: 100%;
            height: 100%;
            overflow: hidden; // for upper radius
          }
          > .play-count {
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0px;
            background-image: url('../../assets/coverall.png');
            background-repeat: no-repeat;
            background-size: auto;
            background-position: 0 -537px;
            height: 27px;
            font-size: 12px;
            line-height: 27px; // line-height 与 height 一样，自动居中
            padding: 0 7px;
            color: #ccc;
          }
        }
        > .playlist-name {
          width: 100%;
          margin: 8px 0 3px;
          font-size: 14px;
          color: #000;
          line-height: 19px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis; // ...
          white-space: nowrap; // 不让换行，不然没有...

        }
        > .playlist-user-name {
          width: 100%;
          margin: 0;
          font-size: 12px;
          color: #999;
          text-align: left;
        }
      }
    }
  }
</style>

<template>
    <div class="music-card-layout"> 
        <div class="card-row" 
          v-for="(item, index) in localData" v-bind:key="index">
          <div class="card-column"
            v-for="subitem in item"
            v-bind:key="subitem.id">
              <div class="playlist-cover-image">
                <img v-bind:src="subitem.coverImage"/>
                <div class="play-count">播放量： {{subitem.playCount}}</div>
              </div>
              <p class="playlist-name">{{subitem.name}}</p>
              <p class="playlist-user-name">by {{subitem.userName}}</p>
          </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'PlayList',
  data() {
    return {};
  },
  computed: {
    localData: function () {
      // 前面是 handler 函数，后面是 初始的值。handler 的初始返回值与初始值保持一致。
      return this.data.reduce((prev, curr, index) => {
        if (index % 5 === 0) {
          prev.push([curr]);
        } else {
          const temp = prev.pop();
          temp.push(curr);
          prev.push(temp);
        }

console.log(prev, this.data)
        return prev;
      }, [])
    }
  },
  props: ['data'],

}
</script>