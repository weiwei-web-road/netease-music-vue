<style lang="less" scoped>
    .song-list-container{
        position: absolute;
        top: -300px;
        width: 980px;
        height: 300px;
        background-color: #121212;
        color: #ffffff;
        border-radius: 4px 4px 0 0;
        > .title {
            display: flex;
            justify-content: flex-start;
            height: 40px;
            padding: 0 5px;
            border-bottom: solid 1px #333;
            display: flex;
            align-items: center;
            > .name {
                width: 555px;
                text-align: left;
                margin-left: 25px;
                border-right: solid 1px #333;
                height: 39px;
                line-height: 39px;
                font-size: 14px;
                color: #e2e2e2;
            }
            > .song-name {
                width: 346px;
                margin-left: 40px;
                color: #fff;
                font-size: 14px;
            }
            > .close {
                width: 30px;
                height: 30px;
                margin-right: 8px;
                background-image: url('../assets/playlist.png');
                background-position: -195px 9px;
                background-repeat: no-repeat;
                cursor: pointer;
            }
        }
        > .content {
            display: flex;
        }
    }
</style>

<template>
  <div class="song-list-container">
    <div class="title">
      <h4 class="name">
        {{ '播放列表('+playSongList.length+')' }}
      </h4>
      <div class="song-name">
        {{ playingSong.songName }}
      </div>
      <div
        class="close"
        @click="closeSongList"
      />
    </div>
    <div class="content">
      <SongList
        :playing-song="playingSong"
        :play-song-list="playSongList"
        @deleteSongList="deleteSongList"
        @handlePlay="handlePlay"
      />
      <Lyric
        :lyric="lyric"
        :played-time-sec="playedTimeSec"
      />
    </div>
  </div>
</template>

<script>
import SongList from './SongList'
import Lyric from './Lyric'
import { localStorageSetItem, localStorageGetItem } from '../utils/index'
import { mapState, mapActions } from 'vuex'

export default {
  props: ['playingSong', 'playedTimeSec'],
  data () {
    return {
      data: localStorageGetItem('playingSongObj'),
      dataArr: localStorageGetItem('playingSongIdArr')
    }
  },
  computed: {
    ...mapState({
      lyric: state => state.lyric
    }),
    playSongList () {
      const arr = []
      for (const item of this.dataArr) {
        arr.push(this.data[item])
      }
      return arr
    }
  },
  components: {
    SongList,
    Lyric
  },
  created () {
    window.addEventListener('setItem', () => {
      this.data = localStorageGetItem('playingSongObj')
      this.dataArr = localStorageGetItem('playingSongIdArr')
    })
  },
  methods: {
    ...mapActions({
      getLyric: 'getLyric',
      getPlayingSongInfo: 'getPlayingSongInfo'
    }),
    closeSongList () {
      this.$emit('closeSongList')
    },
    handlePlay (param) {
      const id = param.id
      const coverImgUrl = param.coverImgUrl
      const src = param.src
      const playListId = param.playListId
      const author = param.author
      const name = param.name
      const payload = {
        id: id,
        src: src,
        coverImgUrl: coverImgUrl,
        songName: name,
        playListId: playListId,
        author: author
      }
      this.getPlayingSongInfo(payload)
      this.getLyric({ id: id })
    },
    deleteSongList (param) {
      const playingSongObj = localStorageGetItem('playingSongObj')
      const playingSongIdArr = localStorageGetItem('playingSongIdArr')

      delete playingSongObj[param]
      const index = playingSongIdArr.indexOf(param)
      playingSongIdArr.splice(index, 1)

      localStorageSetItem('playingSongObj', playingSongObj)
      localStorageSetItem('playingSongIdArr', playingSongIdArr)
    }
  }
}
</script>
