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
              transition: top 300ms ease-in-out 50ms;
              &.visible {
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
                height: 47px;
                transform: translateX(-50%);
              }
            }
        }
    }
</style>

<template>
    <div class='netease-layout'>
        <div class='header'> 
            <Header></Header>
        </div>
        <section>
            <slot name="music-card"></slot>
            <slot name="song-card"></slot>
        </section>
        <div class='footer'>
            <slot name="footer-content">
                <!-- 如果没有响应的slot，就用这个默认的Footer -->
                <Footer></Footer>
            </slot>
        </div>
        <div class="footer-auto-visible">
            <div :class="style.footerContainer" @mouseover="handleFooterOver" @mouseleave.capture="handleFooterMainLeave">
              <div class="updn"><div @click="handleAutoVisible" :class="style.autovisible"></div></div>
              <div class="updn-right"></div>
              <div class="bg" title="背景"></div>
              <div class="hand" @mouseleave="handleFooterLeave" @mouseenter="handleFooterEnter" title="展开播放器"></div>
              <div class="player"><Player></Player></div>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from './Footer';
import Header from './Header';
import Player from './Player';

export default {
  name: 'Layout',
  data() {
      return {
          autovisible: false,
          footerVisible: false,
          mouseOver: false,
          animationState: false
      };
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
      };
    }
  },
  components: {
      Footer,
      Header,
      Player
  },
  methods: {
    handleAutoVisible: function(event) {
      event.preventDefault();
      this.autovisible = !this.autovisible;
    },
    handleFooterEnter: function(event) {
      event.preventDefault();
      if (!this.footerVisible && !this.autovisible) {
        this.footerVisible = true;
        this.animationState = true;
        setTimeout(() => {
          this.animationState = false;
        }, 400);
      }
    },
    handleFooterLeave: function(event) {
      event.preventDefault();
      if (!this.mouseOver && !this.autovisible && !this.animationState) {
        this.footerVisible = false;
      }
    },
    handleFooterOver: function(event) {
      event.preventDefault();
      this.mouseOver = true;
    },
    handleFooterMainLeave: function(event) {
      event.preventDefault();
      event.stopPropagation();
      this.mouseOver = false;
    }
  }
}
</script>
