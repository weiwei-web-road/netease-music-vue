<style lang="less" scoped>
    .song-list-container-left {
        width: 564px;
        overflow-y: scroll;
        height: 259px;
        border-right: solid 1px #333;
        > .song-item {
            display: flex;
            padding-left: 25px;
            height: 28px;
            align-items: center;
            &:hover {
                background-color: #000000;
            }
            &:hover div {
                color: #ffffff !important;
            }
            > .common {
                padding-left: 10px;
                text-align: left;
                font-size: 12px;
            }
            > .name {
                width: 266px;
                color: #cccccc;
                cursor: pointer;
                &:hover {
                    color: #ffffff !important;
                }
            }
            > .blank {
                width: 88px;
                &:hover .delete{
                    visibility: visible;
                    cursor: pointer;
                }
                > .delete {
                    width: 13px;
                    height: 16px;
                    float: right;
                    background-image: url('../assets/playlist.png');
                    background-position: -51px 0;
                    background-repeat: no-repeat;
                    visibility: hidden;
                }
            }
            > .author {
                width: 100px;
                color: #9b9b9b;
                overflow: hidden;
                text-overflow: ellipsis; // ...
                white-space: nowrap; // 不让换行，不然没有...
            }
            > .duration {
                width: 45px;
                color: #666666;
            }
            > .source {
                width: 43px;
                padding-left: 6px;
                text-align: right;
                a {
                    display: inline-block;
                    margin: 7px 10px 0 0;
                    width: 14px;
                    height: 16px;
                    background-image: url('../assets/playlist.png');
                    background-position: -80px 0px;
                    background-repeat: no-repeat;
                    // cursor: pointer;
                }

            }
        }
        > .selected {
            background-color: #000000;
            font-weight: bold;
            > .common {
                color: #ffffff;
            }
        }
    }
</style>

<template>
  <div class="song-list-container-left">
    <div
      v-for="item in playSongList"
      :key="item.id"
      :class="{'song-item':true, 'selected': item.id === playingSong.id}"
    >
      <div
        class="common name"
        @click="handlePlay(item)"
      >
        {{ item.name }}
      </div>
      <div class="common blank">
        <div
          class="delete"
          @click="deleteSongList(item.id)"
        />
      </div>
      <div class="common author">
        {{ item.author[0].name }}
      </div>
      <div class="common duration">
        {{ item.durationTime | dateformat('mm:ss') }}
      </div>
      <div class="source">
        <a />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// 点击显示播放列表时，会调用
// 在显示播放列表的情况下，切换页面，会调用
export default {
  name: 'SongList',
  props: ['playingSong', 'playSongList'],
  methods: {
    ...mapActions({
      getPlayingSongInfo: 'getPlayingSongInfo'
    }),
    closeSongList () {
      this.$emit('closeSongList')
    },
    handlePlay (param) {
      this.$emit('handlePlay', param)
    },
    deleteSongList (param) {
      this.$emit('deleteSongList', param)
    }
  }
}
</script>
