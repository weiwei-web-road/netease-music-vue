<style lang="less">
.song-content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  > .song-introduction {
    // height: 328px;
    padding: 40px 40px 40px 40px;
    box-sizing: border-box; // include content + padding + border
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    > .image-border {
      border: 1px solid #dfdfdf;
      padding: 4px;
      height: 208px;
      width: 208px;
      box-sizing: border-box;
      flex: 0 0 auto;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    > .introduction-content {
      margin: 0 0 0 27px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      > .song-name {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        > .song-list-icon {
          background: url("../../assets/icon.png");
          background-position: 0 -243px;
          background-repeat: no-repeat;
          margin: 5px 6px 10px 0;
          width: 54px;
          height: 24px;
          > .icon {
            background-image: url("../../assets/white-r-icon.png");
            display: inline-block;
            width: 8px;
            height: 8px;
            top: -6px;
            background-size: cover;
            left: 34px;
            position: relative;
          }
        }
        > .name {
          font-size: 20px;
          color: #333333;
        }
      }
      > .song-author {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 0 0 20px;
        font-size: 12px;
        > img {
          width: 35px;
          height: 35px;
        }
        > .author-name {
          margin: 0 0 0 10px;
          color: #0c73c2;
          display: flex;
          align-items: center;
        }
        > .create-time {
          margin: 0 0 0 15px;
          color: #999999;
          display: flex;
          align-items: center;
        }
      }
      > .song-play-button {
        margin: 0 -10px 25px 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        // background-color: #3874bd;
        width: 70px;
        padding: 0 5px 0 10px;
        box-sizing: border-box;
        border-radius: 3px;
        // background: linear-gradient(to bottom, #518dd0 0%,#3874bd 100%);
        background: linear-gradient(
          to bottom,
          rgb(79, 140, 209) 0%,
          rgb(56, 116, 189) 100%
        );
        cursor: pointer;

        > .play-icon {
          background: url("../../assets/button2.png") no-repeat 0 9999px;
          text-decoration: none;
          width: 20px;
          height: 18px;
          margin: 6px 2px 2px 0;
          background-position: 0 -1622px;
          overflow: hidden;
        }
        > .play {
          color: #fff;
          font-size: 12px;
          height: 31px;
          line-height: 31px;
        }
      }
      > .song-mark {
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        > .mark {
          color: #666666;
          height: 22px;
          line-height: 22px;
        }
        > .mark-content {
          box-sizing: border-box;
          margin-right: 10px;
          height: 22px;
          display: inline-block;
          padding: 0 13px;
          border: 1px solid rgb(214, 214, 214);
          border-radius: 11px;

          line-height: 20px;
          color: #2c3e50;
          background: linear-gradient(to top, #f7f7f7 0%, #f1f1f1 100%);
        }
      }
      > .song-detail {
        margin: 8px 0 0;
        font-size: 12px;
        color: #666666;
        text-align: left;
        width: 100%;
        display: block;
        line-height: 18px;
        // border-bottom: 1px solid red;
        &.closed {
          max-height: 54px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        // text-overflow: ellipsis; // ...
        // white-space: nowrap; // 不让换行，不然没有...
      }
      > .detail-operation-btn {
        color: #0c73c2;
        font-size: 12px;
        cursor: pointer;
        text-align: right;
        // > .openIcon {
        //     width: 11px;
        //     height: 8px;
        //     background-position: -65px -520px;
        //     background: url('../../assets/icon.png') no-repeat 0 9999px;
        // }
        // > .closeIcon {

        // }
      }
    }
  }
  .song-list-container {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 0;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    padding-left: 32px;
    > .left-side {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      > .song-list-name {
        font-size: 20px;
        color: #333333;
      }
      > .song-list-length {
        font-size: 12px;
        color: #666666;
        margin: 9px 0 0 20px;
      }
    }
    > .play-count {
      font-size: 12px;
      color: #666666;
      margin: 5px 0 0;
      float: right;
      height: 28px;
      line-height: 28px;
      > span {
        font-weight: bold;
        color: #c20c0c;
      }
    }
  }
  > .song-list-table {
    display: flex;
    align-items: center;
    background: linear-gradient(to bottom, #f7f7f7 0%, #f1f1f1 100%);
    border-bottom: 1px solid #d6d6d6;
    > .common {
      text-align: left;
      font-weight: normal;
      color: #666;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      padding: 8px 10px;
    }
    > .border-right {
      border-right: 1px solid #d6d6d6;
    }
  }
  .first-title {
    width: 54px;
  }
  .second-title {
    width: 283px;
  }
  .third-title {
    width: 91px;
  }
  .fourth-title {
    width: 83px;
  }
  .fifth-title {
    width: 102px;
  }
  > .song-list-content {
    padding-top: 2px;
    display: flex;
    align-items: center;

    > .common {
      text-align: left;
      font-weight: normal;
      color: #666;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      padding: 8px 10px;
      overflow: hidden;
      text-overflow: ellipsis; // ...
      white-space: nowrap; // 不让换行，不然没有...
      > .play-icon {
        background: url("../../assets/table.png") no-repeat 0 9999px;
        width: 17px;
        height: 17px;
        cursor: pointer;
        background-position: 0 -103px;
        float: right;
      }
    }
    > .black-color {
      color: #333333;
    }
  }
  > .odd {
    background-color: #f7f7f7;
  }
}
</style>

<template>
  <div class="song-content-container">
    <div :class="{ 'song-introduction': true }">
      <div class="image-border">
        <img :src="myPlayListDetail.coverImgUrl" />
      </div>
      <div class="introduction-content">
        <div class="song-name">
          <div class="song-list-icon">
            <span class="icon" />
          </div>
          <div class="name">
            {{ myPlayListDetail.name }}
          </div>
        </div>

        <div class="song-author">
          <img :src="myPlayListDetail.creatorAvatarUrl" />
          <div class="author-name">
            {{ myPlayListDetail.creatorNickName }}
          </div>
          <div class="create-time">
            {{ dateformat(myPlayListDetail.createTime, "YYYY-MM-DD") }} 创建
          </div>
        </div>

        <div class="song-play-button" @click="addToPlayingSongList">
          <div class="play-icon" />
          <div class="play">
            播放
          </div>
        </div>

        <div
          v-if="myPlayListDetail.tags && myPlayListDetail.tags.length > 0"
          class="song-mark"
        >
          <div class="mark">
            标签：
          </div>

          <div
            v-for="mark in myPlayListDetail.tags"
            :key="mark"
            class="mark-content"
          >
            {{ mark }}
          </div>
        </div>

        <p ref="description" :class="{ 'song-detail': true, closed: !opened }">
          {{ myPlayListDetail.description }}
        </p>
        <div
          v-if="isCanOpen"
          class="detail-operation-btn"
          @click="handleDescriptionToggle"
        >
          <span>{{ opened ? "收起" : "展开" }}</span>
          <!-- <span v-bind:class="{openIcon: !opened, closeIcon: opened}">5656</span> -->
        </div>
      </div>
    </div>
    <div :class="{ 'song-list-container': true }">
      <div class="left-side">
        <div class="song-list-name">
          歌曲列表
        </div>
        <div class="song-list-length">
          {{ myPlayListDetail.trackCount }}首歌
        </div>
      </div>
      <div class="play-count">
        播放：<span>{{ myPlayListDetail.playCount }}</span> 次
      </div>
    </div>
    <div :class="{ 'song-list-table': true }">
      <div class="first-title common border-right">
        &nbsp;
      </div>
      <div class="second-title common border-right">
        歌曲标题
      </div>
      <div class="third-title common border-right">
        时长
      </div>
      <div class="fourth-title common border-right">
        歌手
      </div>
      <div class="fifth-title common">
        专辑
      </div>
    </div>

    <div
      v-for="(item, index) in myPlayListDetail.tracks"
      :key="index"
      :class="{ 'song-list-content': true, odd: index % 2 === 0 }"
    >
      <div class="first-title common">
        {{ index + 1 }}
        <span class="play-icon" @click="handlePlay(item)" />
      </div>
      <div class="second-title common black-color">
        {{ item.name }}
      </div>
      <div class="third-title common">
        {{ dateformat(item.durationTime, "mm:ss") }}
      </div>
      <div class="fourth-title common black-color">
        <span v-for="(author, index) in item.author" :key="index">{{
          author.name
        }}</span>
      </div>
      <div class="fifth-title common black-color">
        {{ item.collection }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { localStorageSetItem, localStorageGetItem, dateformat } from '../../utils/index';

export default {
    'name': 'RightContent',
    'props': ['myPlayListDetail'],
    data() {
        return {
            'opened': false, // 当前状态不是 open 的
            'isCanOpen': false, // 是否有展开按钮
            'isReComputed': false
        };
    },
    'watch': {
    // 实时监视着 myPlayListDetail， 当其变化时，执行function
    // 当点击其他的 play list 时， myPlayListDetail 会发生变化，需要重新计算，所以设置isReComputed = true，update 函数会执行
        'myPlayListDetail': function () {
            console.log('响应变化');
            this.opened = false;
            this.isReComputed = true;
        }
    },
    'computed': {
        ...mapState({
            'isPlaying': (state) => state.isPlaying
        })
    },
    'methods': {
        ...mapActions({
            'getPlayingSongInfo': 'getPlayingSongInfo',
            'getLyric': 'getLyric',
            'updateIsPlaying': 'updateIsPlaying'
        }),
        handlePlay(param) {
            const id = param.id,
                coverImgUrl = this.myPlayListDetail.coverImgUrl,
                src = this.myPlayListDetail.songUrlMap[param.id],
                playListId = this.myPlayListDetail.id,
                author = param.author,
                name = param.name,
                payload = {
                    'id': id,
                    'src': src,
                    'coverImgUrl': coverImgUrl,
                    'songName': name,
                    'playListId': playListId,
                    'author': author
                };

            this.getPlayingSongInfo(payload);
            const data = {
                    'id': id,
                    'name': name,
                    'author': author,
                    'collection': param.collection,
                    'durationTime': param.durationTime,
                    'coverImgUrl': coverImgUrl,
                    'playListId': playListId,
                    'src': src
                },
                playingSongObj = localStorageGetItem('playingSongObj'),
                playingSongIdArr = localStorageGetItem('playingSongIdArr');

            if (!Object.prototype.hasOwnProperty.call(playingSongObj, id)) {
                playingSongObj[id] = data;
                playingSongIdArr.push(id);
            }
            localStorageSetItem('playingSongObj', playingSongObj);
            localStorageSetItem('playingSongIdArr', playingSongIdArr);

            this.getLyric({ 'id': id });

            const initPlay = {
                'isPlaying': this.isPlaying,
                'showSongList': false
            };

            this.updateIsPlaying(initPlay);
        },
        'computeIsClosed': function() {
            // ref 加在普通的元素上，用this.ref.name 获取到的是dom元素
            // refs:一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例 注意：refs只会在组件渲染完成之后生效，并且它们不是响应式的
            if (this.$refs.description) {
                const clientHeight = this.$refs.description.clientHeight, // 可视窗口的高度
                    scrollHeight = this.$refs.description.scrollHeight; // 文档或元素真实的高度，相对 Scroll 的高度

                return clientHeight < scrollHeight;
            }
            return false;

        },
        'handleDescriptionToggle': function() {
            this.opened = !this.opened;
        },
        addToPlayingSongList() {
            const tracks = this.myPlayListDetail.tracks,
                songUrlMap = this.myPlayListDetail.songUrlMap,
                coverImgUrl = this.myPlayListDetail.coverImgUrl,
                playListId = this.myPlayListDetail.id,
                playingSongObj = localStorageGetItem('playingSongObj');
            let playingSongIdArr = localStorageGetItem('playingSongIdArr');

            if (Object.keys(playingSongIdArr).length === 0) {
                playingSongIdArr = [];
            }
            tracks.forEach((item) => {
                const id = item.id;

                if (!Object.prototype.hasOwnProperty.call(playingSongObj, id)) {
                    const url = songUrlMap[id];

                    item.src = url;
                    item.coverImgUrl = coverImgUrl;
                    item.playListId = playListId;
                    playingSongObj[id] = item;
                    playingSongIdArr.push(id);
                }
            });
            localStorageSetItem('playingSongObj', playingSongObj);
            localStorageSetItem('playingSongIdArr', playingSongIdArr);

            if (tracks.length > 0) {
                const track = tracks[0],
                    id = track.id,
                    src = this.myPlayListDetail.songUrlMap[track.id],
                    author = track.author,
                    name = track.name,
                    payload = {
                        'id': id,
                        'src': src,
                        'coverImgUrl': this.myPlayListDetail.coverImgUrl,
                        'songName': name,
                        'playListId': this.myPlayListDetail.id,
                        'author': author
                    };

                this.getPlayingSongInfo(payload);
            }
        },
        dateformat
    },

    // 实例挂载到DOM之后，生成DOM节点之后调用
    'mounted': function() {
    // nextTick是全局vue的一个函数，在vue系统中，用于处理dom更新的操作。vue里面有一个watcher，用于观察数据的变化，然后更新dom，vue里面并不是每次数据改变都会触发更新dom，而是将这些操作都缓存在一个队列，在一个事件循环结束之后，刷新队列，统一执行dom更新操作。
    // Vue.js实现了一个queue队列，在下一个tick的时候会统一执行queue中Watcher的run。同时，拥有相同id的Watcher不会被重复加入到该queue中去
    // 保证更新视图操作DOM的动作是在当前栈执行完以后下一个tick的时候调用，大大优化了性能。
    // 异步更新Dom操作
        this.$nextTick(() => {
            const isClosed = this.computeIsClosed();

            if (isClosed) {
                // 初始化是展开的，则isCanOpen is true
                this.opened = !isClosed;
                this.isCanOpen = true;
            } else {
                this.opened = false;
                this.isCanOpen = false;
            }
        });
    },
    'updated': function() {
    // 当点击其他的 play list 时，isReComputed = true，在updated 中 的 $nextTick 中，重新计算
    // 把$nextTick 中的操作 都缓存在一个队列，在一个事件循环结束之后，刷新队列，统一执行dom更新操作。
        this.$nextTick(() => {
            // Code that will run only after the
            // entire view has been re-rendered
            if (this.isReComputed) {
                const isClosed = this.computeIsClosed();

                if (isClosed) {
                    // 初始化是展开的，则isCanOpen is true
                    this.opened = !isClosed;
                    this.isCanOpen = true;
                } else {
                    this.opened = false;
                    this.isCanOpen = false;
                }
                this.isReComputed = false;
            }
        });
    }
};
</script>
