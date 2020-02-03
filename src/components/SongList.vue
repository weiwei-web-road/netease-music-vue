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
            > .left {
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
                        background-color: rgba(0,0,0,0.4);
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
                    }
                    > .blank {
                        width: 88px;
                    }
                    > .author {
                        width: 80px;
                        color: #9b9b9b;
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
                            cursor: pointer;
                        }
                        
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="song-list-container">
        <div class="title">
            <h4 class="name">{{songListLen}}</h4>
            <div class="song-name">歌名</div>
            <div class="close" @click="closeSongList"></div>
        </div>
        <div class="content">
            <div class="left">
                <div class="song-item" v-for="(item, index) in playSongList" v-bind:key="index">
                    <div class="common name">{{item.name}}</div>
                    <div class="common blank"></div>
                    <div class="common author">{{item.author}}</div>
                    <div class="common duration">{{item.duration}}</div>
                    <div class="source"><a></a></div>
                </div>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'song-list',
    data() {
        return {
            songListLen: '播放列表(62)',
        }
    },
    computed: {
        ...mapState({
            playSongList: state => state.playSongList
        })
    },
    methods: {
        closeSongList() {
            this.$emit('closeSongList');
        }
    }
}
</script>