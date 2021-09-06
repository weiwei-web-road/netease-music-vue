<style lang="less" scoped>
.song-list-container {
  width: 100%;
  padding-top: 40px;
  > .title {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    padding: 0 10px 12px 15px;
  }
  > .song-list {
    padding: 6px 0 6px 20px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;

    > .image {
      > img {
        width: 40px;
        height: 40px;
      }
    }
    > .song-list-content {
      text-align: left;
      width: 150px;
      overflow: hidden;
      margin-top: 2px;
      margin-bottom: 8px;
      padding-left: 10px;
      > .song-list-name {
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis; // ...
        white-space: nowrap; // 不让换行，不然没有...
      }
      > .song-list-info {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis; // ...
        white-space: nowrap; // 不让换行，不然没有...
      }
    }
  }
}
</style>

<template>
  <div class="song-list-container">
    <div class="title">收藏的歌单({{ data.length }})</div>
    <div
      v-for="(music, index) in data"
      :key="index"
      class="song-list"
      @click="playListClick(music.id)"
    >
      <div class="image">
        <img :src="music.coverImgUrl" />
      </div>
      <div class="song-list-content">
        <div class="song-list-name">
          {{ music.name }}
        </div>
        <div class="song-list-info">
          <div class="song-length">{{ music.trackCount }}首&ensp;</div>
          <div class="song-author">by {{ music.creatorNickName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex, { mapActions } from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default {
  name: "LeftTitle",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchMyPlayListDetailAsync: "fetchMyPlayListDetailAsync",
    }),
    playListClick: function(value) {
      this.fetchMyPlayListDetailAsync({
        id: value,
      });
    },
  },

  props: ["data"],
};
</script>
