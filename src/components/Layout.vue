<style lang="less">
    html, body {
        margin: 0px;
    }
    .netease-layout {
        width: 100%;
        // 3: 水平居中方法三，use flex
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 47px;
        background-color: #f2f2f2;
        > .header {
            width: 100%;
            flex-grow: 0;
            flex-shrink: 0;
            height: 70px;
            background: #242424;
            color: white;
        }

        section {
            width: 980px;
            // min-height: 700px;
            background-color: #000;
            flex: 1 1 0;
            // 1： 水平居中方法一，margin:auto法，根据宽度水平居中元素
            // margin: auto;

            // 2: 水平居中方法二， use transform
            // margin-left: 50%;
            // transform: translate(-50%);

            // box-sizing: content-box; // 默认，设置的width 作用于content
            box-sizing: border-box; // 总的展示宽度是 content + border + margin
            margin-top: 5px;
        }
        > .footer {
            width: 100%;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: 90px;
            overflow: hidden;
            border-top: 1px solid #d3d3d3;
            background: #f2f2f2;
        }

        > .footer-auto-visible {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0;
            z-index: 1002;
            width: 100%;
            > .footer-container {
              top: -7px;
              height: 53px;
              width: 100%;
              margin: 0 auto;
              position: absolute;
              transition: top 400ms ease-in-out 300ms;
              &.visible {
                transition: top 200ms ease-in-out 50ms;
                top: -53px;
              }

              > .hand {
                position: absolute;
                top: -10px;
                width: 100%;
                height: 20px;
                cursor: pointer;
              }
              > .bg {
                height: 53px;
                background-image: url('../assets/playbar.png');
                background-position: 0 0;
                background-repeat: repeat-x;
                margin-right: 67px;
              }
              > .updn {
                position: absolute;
                top: -14px;
                right: 15px;
                width: 52px;
                height: 67px;
                z-index: 1;
                background-position: 0 -380px;
                background-image: url('../assets/playbar.png');
                > .icon {
                  display: block;
                  width: 18px;
                  height: 18px;
                  margin: 6px 0 0 17px;
                  background-position: -80px -380px;
                  background-image: url('../assets/playbar.png');
                  cursor: pointer;
                  &:hover {
                    background-position: -80px -400px;
                  }
                  &.lock {
                    background-position: -100px -380px;
                    &:hover {
                      background-position: -100px -400px;
                    }
                  }
                }
              }
              > .updn-right {
                position: absolute;
                top: -1px;
                right: 0;
                width: 15px;
                height: 54px;
                background-position: -52px -393px;
                pointer-events: none;
                background-image: url('../assets/playbar.png');
              }
              > .player {
                position: absolute;
                left: 50%;
                top: 6px;
                z-index: 15;
                width: 980px;
                height: 4s7px;
                transform: translateX(-50%);
              }
            }
        }
    }
</style>

<template>
  <div class="netease-layout">
    <div class="header">
      <Header />
    </div>
    <section>
      <slot name="music-card" />
      <slot name="song-card" />
    </section>
    <div class="footer">
      <slot name="footer-content">
        <!-- 如果没有响应的slot，就用这个默认的Footer -->
        <Footer />
      </slot>
    </div>
    <div class="footer-auto-visible">
      <div
        :class="style.footerContainer"
        @mouseenter="handleFooterEnter"
        @mouseleave="handleFooterLeave"
      >
        <div class="updn">
          <div
            :class="style.autovisible"
            @click="handleAutoVisible"
          />
        </div>
        <div class="updn-right" />
        <div
          class="bg"
          title="背景"
        />
        <div
          class="hand"
          title="展开播放器"
        />
        <div class="player">
          <Player
            :playing-song="playingSong"
            @clockPlayer="clockPlayer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from './Footer'
import Header from './Header'
import Player from './Player'
import { mapState } from 'vuex'
// 每次切换页面时，Layout 和 Header，Footer 组件会再次调用。
export default {
  name: 'Layout',
  data () {
    return {
      autovisible: false, //
      footerVisible: false, // 12
      mouseOver: false, //
      animationState: false, //
      showSongList: false
    }
  },
  computed: {
    style: function () {
      return {
        footerContainer: {
          'footer-container': true,
          visible: this.footerVisible
        },
        autovisible: {
          icon: true,
          lock: this.autovisible
        }
      }
    },
    ...mapState({
      playingSong: state => state.playingSong
    })
  },
  components: {
    Footer,
    Header,
    Player
  },
  methods: {
    handleAutoVisible: function (event) {
      event.preventDefault()
      this.autovisible = !this.autovisible
    },
    handleFooterEnter: function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (!this.footerVisible && !this.autovisible) {
        this.footerVisible = true
        this.animationState = true
        setTimeout(() => {
          this.animationState = false
        }, 400)
      }
    },
    handleFooterLeave: function (event) {
      event.preventDefault() // 阻止标签点击时的一些默认行为， 比如a标签，点击的时候，阻止跳转
      event.stopPropagation() // 阻止冒泡
      if (!this.autovisible && !this.animationState && this.footerVisible && !this.showSongList) {
        this.footerVisible = false
        this.animationState = true
        setTimeout(() => {
          this.animationState = false
        }, 400)
      }
    },
    clockPlayer (param) {
      this.showSongList = param
      if (!this.showSongList && !this.autovisible) {
        this.footerVisible = false
        this.animationState = true
        setTimeout(() => {
          this.animationState = false
        }, 400)
      }
    }
  }
}
</script>
