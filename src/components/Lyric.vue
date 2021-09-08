<style lang="less" scoped>
    .lyric-container {
        width: 415px;
        height: 259px;
        overflow: scroll;
        color: #989898;
        word-wrap: break-word;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > .item {
            width: 354px;
            height: 32px;
            line-height: 32px;
            // transform: translate(0px, 130px);
        }
        > .selected {
            font-weight: bold;
            font-size: 14px;
            color: #ffffff;
            transition: color 0.7s linear;
        }
    }
</style>
<template>
  <div class="lyric-container">
    <div
      v-for="(item, index) of lyric"
      ref="lyricLine"
      :key="index"
      :class="{'item':true, 'selected':indexLine===index}"
    >
      {{ item.content }}
    </div>
  </div>
</template>
<script>
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

export default {
    'props': ['lyric', 'playedTimeSec'],
    data () {
        return {
            'indexLine': 0
        };
    },
    'watch': {
        'playedTimeSec': function () {
            for (let i = 0; i < this.lyric.length - 1; i++) {
                if (this.playedTimeSec < this.lyric[i + 1].time && this.playedTimeSec > this.lyric[i].time) {
                    this.indexLine = i;
                    break;
                }
            }
            this.goToLyricLine();
        }
    },
    'methods': {
        goToLyricLine () {
            const node = this.$refs.lyricLine[this.indexLine];

            scrollIntoViewIfNeeded(node, {
                'centerIfNeeded': true
                // scrollMode: 'if-needed',
                // block: 'center',
                // inline: 'center',
            });
        }
    }
};
</script>
