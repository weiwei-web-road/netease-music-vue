<style lang="less" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        margin: 0; // 去掉 div 默认的 marign padding
        padding: 0;
        // display: flex;
        // justify-content: center;
        // flex-direction: row;
        // align-items: center;

    }
    .player-container {
        width: 980px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
        // 溢出的东西直接 hidden
        overflow: hidden;

        > .left {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
            // 溢出的东西直接 hidden
            overflow: hidden;

            > .btn {
                width: 137px;
                padding: 6px 0 0 0;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                height: 42px;
                box-sizing: border-box;
                > .prev-song {
                    width: 28px;
                    height: 28px;
                    margin-right: 8px;
                    margin-top: 5px;
                    text-indent: -9999px;
                    background: url('../assets/playbar.png') no-repeat 0 9999px;
                    background-position: 0 -130px; // 顺序很重要 background-position 必须在 background 后面

                }
                > .audio-status {
                    width: 36px;
                    height: 36px;
                    margin-top: 0;
                    background: url('../assets/playbar.png') no-repeat 0 9999px;
                    background-position: 0 -165px;
                    margin-right: 8px;
                    text-indent: -9999px;
                    cursor: pointer;
                }
                > .pause {
                    background-position: 0 -165px;
                }
                > .play {
                    background-position: 0 -204px;
                }
                > .next-song {
                    width: 28px;
                    height: 28px;
                    margin-right: 8px;
                    margin-top: 5px;
                    text-indent: -9999px;
                    background: url('../assets/playbar.png') no-repeat 0 9999px;
                    background-position: -80px -130px;
                }
            }

            > .head-img {
                width: 34px;
                height: 34px;
                margin: 6px 15px 0 0;
                > img {
                    width: 34px;
                    height: 34px;
                    border-radius: 3px;
                }
            }
            > .play-status {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                > .play-title {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: 12px;
                    height: 28px;
                    > .song-name {
                        color: #e8e8e8;
                        margin-right: 15px;
                    }
                    > .singer {
                        color: #9b9b9b;
                    }
                }
                > .play-bar {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    > .bar {
                        // width: 493px;
                        height: 9px;
                        background: url('../assets/statbar.png') no-repeat 0 9999px;
                        background-position: right 0;
                        > .black-bar {
                            // width: 470px;
                            height: 9px;
                            background: url('../assets/statbar.png') no-repeat 0 9999px;
                            background-position: right -30px;

                        }
                        > .red-bar {
                            // width: 400px;
                            height: 9px;
                            background: url('../assets/statbar.png') no-repeat 0 9999px;
                            background-position: left -66px;
                            position: relative;
                            top: -9px;
                            left: 0;
                            transition: width 1000ms linear;
                            span {
                                background: url('../assets/iconall.png') no-repeat 0 9999px;
                                background-position: 0 -250px;
                                width: 22px;
                                height: 24px;
                                position: absolute;
                                top: -7px;
                                right: -13px;
                            }
                        }
                    }
                    > .play-time {
                        font-size: 12px;
                        color: #797979;
                        text-shadow: 0 1px #121212;
                        margin-left: 12px;
                        margin-top: -3px;
                        span {
                            color: #a1a1a1 !important;
                        }
                    }
                }
            }
        }

        > .operation-btn {
            display: flex;
            justify-content: space-between;
            > .volume {
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: -2px -248px;
                width: 25px;
                height: 25px;
                margin: 11px 2px 0 0;
            }
            > .repeat {
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: -3px -344px;
                width: 25px;
                height: 25px;
                margin: 11px 2px 0 0;
            }
            > .play-list-icon {
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: -42px -68px;
                width: 59px;
                height: 27px;
                margin: 11px 2px 0 0;
                span {
                    font-size: 12px;
                    padding: 0 0 0 21px;
                    color: #666666;
                }
                &:hover {
                    cursor: pointer;
                }

            }
        }
    }
</style>

<template>
  <div class="wrapper">
    <SongListPanel
      v-if="showSongList"
      :playing-song="playingSong"
      :played-time-sec="playedTimeSec"
      @closeSongList="closeSongList"
    />
    <div class="player-container">
      <div class="left">
        <div class="btn">
          <a class="prev-song" />
          <a
            :class="{'audio-status': true, 'pause': isPlaying, 'play': !isPlaying}"
            @click="handleTroggle"
          />
          <a class="next-song" />
        </div>

        <div class="head-img">
          <img :src="playingSong.coverImgUrl">
        </div>

        <div class="play-status">
          <div class="play-title">
            <div class="song-name">
              {{ playingSong.songName }}
            </div>
            <div class="singer">
              <span
                v-for="(author, index) in playingSong.author"
                :key="index"
              >{{ author.name }}</span>
            </div>
          </div>

          <div class="play-bar">
            <div
              class="bar"
              :style="{width: blackBarWidth}"
            >
              <div
                class="black-bar"
                :style="{width: playedWidth}"
              />
              <div
                class="red-bar"
                :style="{width: playedWidth}"
              >
                <span />
              </div>
            </div>

            <div class="play-time">
              <span>{{ playedTime }}</span> / {{ totalTime }}
            </div>
          </div>
        </div>
      </div>

      <div class="operation-btn">
        <div class="volume" />
        <div class="repeat" />
        <div
          class="play-list-icon"
          @click="clickShowSongList()"
        >
          <span>{{ songListLen }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getAudioEvent from '../config/AudioEvent'
import SongListPanel from './SongListPanel.vue'
import { mapState, mapActions } from 'vuex'
import { localStorageGetItem } from '../utils/index'

const audioEvent = getAudioEvent('player')
// 每次切换页面时，Layout 和 Header，Footer，Player 组件会再次调用。

export default {
  props: ['playingSong'],
  data () {
    return {
      totalWidth: 493,
      playedTime: '00:00',
      playedTimeSec: 0,
      totalTime: '00:00',
      playedWidth: '0px',
      data: localStorageGetItem('playingSongObj')
    }
  },
  computed: {
    blackBarWidth () {
      return this.totalWidth + 'px'
    },
    ...mapState({
      isPlaying: state => state.initPlay.isPlaying,
      showSongList: state => state.initPlay.showSongList
    }),
    songListLen () {
      return Object.keys(this.data).length
    }
  },
  watch: {
    playingSong: function () {
      this.initialSong()
    }
  },
  created () {
    window.addEventListener('setItem', () => {
      this.data = localStorageGetItem('playingSongObj')
    })
  },
  components: {
    SongListPanel
  },
  mounted () {
    // 获取播放器控制权
    this.$audio.$emit(audioEvent.SETCONTROLL, 'player')
    this.$audio.$on(audioEvent.ONPLAY, () => {
    })
    this.$audio.$on(audioEvent.ONTIMEUPDATE, (options) => {
      this.onTimeUpdate(options)
    })

    const payload = {
      isPlaying: this.isPlaying,
      showSongList: false
    }
    this.updateIsPlaying(payload)
  },
  methods: {
    ...mapActions({
      updateIsPlaying: 'updateIsPlaying'
    }),
    play () {
      // this.$audio = this.$root, 因为$audio 已经被挂载到全局Vue实例上了
      // 向Vue实例发射事件INITIALAUDIO，并且带着实参src等，也可以直接调用play()或者setSrc()
      // audioComponent 组件里面，有$on在监听INITIALAUDIO事件，然后触发响应的方法
      // this.$audio.$emit(audioEvent.PLAY, {
      //     src: 'http://sf3-ttcdn-tos.pstatp.com/obj/ttfe/cg/homed/a8772889f38dfcb91c04da915b301617.mp3'
      // });

      this.$audio.$emit(audioEvent.PLAY)
    },
    pause () {
      this.$audio.$emit(audioEvent.PAUSE)
    },
    handleTroggle () {
      if (this.isPlaying) {
        const payload = {
          isPlaying: false,
          showSongList: this.showSongList
        }
        this.updateIsPlaying(payload)
        this.pause()
      } else {
        const payload = {
          isPlaying: true,
          showSongList: this.showSongList
        }
        this.updateIsPlaying(payload)
        this.play()
      }
    },
    initialSong () {
      this.$audio.$emit(audioEvent.SETSRC, {
        src: this.playingSong.src,
        autoplay: true
      })
      // to do
      // 归零所有的控制信息，进度条，歌曲的信息，歌词，
      const payload = {
        isPlaying: true,
        showSongList: this.showSongList
      }
      this.updateIsPlaying(payload)
    },
    onTimeUpdate (param) {
      this.playedTimeSec = param.time
      const duration = Math.round(param.duration)
      // 解决动画卡顿的方法是计算得到每秒的宽度，然后动画时间设置为1秒
      // this.playedTimeSec 当前播放时间每秒会更新，当更新的时候计算ratio，每秒会更新
      const ratio = this.playedTimeSec / duration
      this.playedTime = this.convertTimeFormat(this.playedTimeSec)
      this.totalTime = this.convertTimeFormat(duration)
      this.playedWidth = this.totalWidth * ratio + 'px'
    },
    convertTimeFormat (time) {
      const mins = Math.floor(time / 60)
      const minsFormat = mins < 10 ? '0' + mins : mins
      const secs = time % 60
      const secsFormat = secs < 10 ? '0' + secs : secs
      return minsFormat + ':' + secsFormat
    },
    clickShowSongList () {
      const payload = {
        isPlaying: this.isPlaying,
        showSongList: !this.showSongList
      }
      this.updateIsPlaying(payload)
      // this.showSongList = !this.showSongList;
      this.$emit('clockPlayer', this.showSongList)
    },
    closeSongList () {
      const payload = {
        isPlaying: this.isPlaying,
        showSongList: false
      }
      this.updateIsPlaying(payload)
      // this.showSongList = false;
      this.$emit('clockPlayer', this.showSongList)
    }
  }
}
</script>
