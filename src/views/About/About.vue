<template>
  <div>
    <div style="text-align: center">
      {{ title }}
    </div>
    <div class="top-prove">
      为了证明楼下的那货不会对我造成影响
    </div>
    <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
      <div ref="desc" class="intro-content" :title="introduce">
        <span v-if="introduce" class="merchant-desc">
          {{ introduce }}
        </span>
        <div v-if="showExchangeButton" class="unfold" @click="showTotalIntro">
          <p>{{ exchangeButton ? "展开" : "收起" }}</p>
        </div>
      </div>
    </div>
    <div class="bottom-prove">
      为了证明楼上的那货不会对我造成影响
    </div>
    <div class="change-buttom">
      <div class="long" @click="tryLong">
        点这试试一段比较长的文字
      </div>
      <div class="short" @click="tryShort">
        点这试试一段比较短的文字
      </div>
    </div>
  </div>
</template>

<script>
export default {
    'name': 'Spread',
    data() {
        return {
            'title': '演示展开收起',
            'introduce': '',
            // 是否展示所有文本内容
            'showTotal': true,
            // 显示展开还是收起
            'exchangeButton': true,
            // 是否显示展开收起按钮
            'showExchangeButton': false,
            'rem': ''
        };
    },
    'watch': {
        'introduce': function() {
            this.$nextTick(
                function() {
                    // 判断介绍是否超过四行
                    const rem = parseFloat(this.getRem());

                    if (!this.$refs.desc) {
                        return;
                    }
                    const descHeight = window
                        .getComputedStyle(this.$refs.desc)
                        .height.replace('px', '');

                    if (descHeight > 5.25 * rem) {
                        // 显示展开收起按钮
                        this.showExchangeButton = true;
                        this.exchangeButton = true;
                        // 不是显示所有
                        this.showTotal = false;
                    } else {
                        // 不显示展开收起按钮
                        this.showExchangeButton = false;
                        // 没有超过四行就显示所有
                        this.showTotal = true;
                    }
                }.bind(this)
            );
        }
    },
    mounted() {
        this.init();
    },
    'methods': {
        showTotalIntro() {
            this.showTotal = !this.showTotal;
            this.exchangeButton = !this.exchangeButton;
        },
        getRem() {
            const defaultRem = 16,
                winWidth = window.innerWidth,
                rem = winWidth / 375 * defaultRem;

            return rem;
        },
        init() {
            this.introduce =
        '拥有财富、名声、权力，这世界上的一切的男人--哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。拥有财富、名声、权力，这世界上的一切的男人 “海贼王”哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。';
        },
        tryLong() {
            const longIntroduce =
        'Vue是一套用于构建用户界面的渐进式框架。Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。';

            if (this.introduce !== longIntroduce) {
                this.showExchangeButton = false;
                this.showTotal = true;
                this.introduce = longIntroduce;
            }
        },
        tryShort() {
            const shortIntroduce =
        'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。';

            if (this.introduce !== shortIntroduce) {
                this.showExchangeButton = false;
                this.showTotal = true;
                this.introduce = shortIntroduce;
            }
        }
    }
};
</script>

<style lang="less" scoped rel="stylesheet/less">
.top-prove {
  height: 100px;
  width: 100%;
  background: #dddddd;
  text-align: center;
  line-height: 100px;
}
.total-introduce {
  height: auto;
  overflow: hidden;
  font-size: 14px;
  color: #434343;
  margin: 10px;
  .intro-content {
    .merchant-desc {
      width: 100%;
      line-height: 21px;
    }
  }
  .unfold {
    display: block;
    z-index: 11;
    float: right;
    width: 40px;
    height: 21px;
    p {
      margin: 0;
      line-height: 21px;
      color: #7fbe87;
    }
  }
}
.detailed-introduce {
  font-size: 14px;
  color: #434343;
  position: relative;
  overflow: hidden;
  margin: 10px;
  .intro-content {
    // 最大高度设为4倍的行间距
    max-height: 84px;
    line-height: 21px;
    word-wrap: break-word;
    /*强制打散字符*/
    word-break: break-all;
    background: #ffffff;
    /*同背景色*/
    color: #ffffff;
    overflow: hidden;
    .merchant-desc {
      width: 100%;
      line-height: 21px;
    }
    &:after,
      // 这是展开前实际显示的内容
      &:before {
      content: attr(title);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      color: #434343;
      // overflow: hidden;
    }
    // 把最后最后一行自身的上面三行遮住
    &:before {
      display: block;
      overflow: hidden;
      z-index: 1;
      max-height: 63px;
      background: #ffffff;
    }
    &:after {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 81px;
      /*截取行数*/
      -webkit-line-clamp: 4;
      text-overflow: ellipsis;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
      text-indent: -12em;
      /*尾部留空字符数*/
      padding-right: 4em;
    }
    .unfold {
      z-index: 11;
      width: 40px;
      height: 21px;
      outline: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      p {
        margin: 0;
        line-height: 21px;
        color: #7fbe87;
      }
    }
  }
}
.bottom-prove {
  height: 100px;
  width: 100%;
  background: #dddddd;
  text-align: center;
  line-height: 100px;
}
.change-buttom {
  font-size: 14px;
  color: #2371be;
  .long {
    text-align: 21px;
    text-align: center;
    height: 21px;
  }
  .short {
    text-align: 21px;
    text-align: center;
    height: 20px;
  }
}
</style>
