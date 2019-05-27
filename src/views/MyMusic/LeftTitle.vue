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
        <div class="title">收藏的歌单({{musicList.length}})</div>
        <div class="song-list" v-for="(music, index) in musicList" v-bind:key="index">
            <div class="image"> 
                <img src='../../assets/song_img.jpeg'>
            </div>
            <div class="song-list-content">
                <div class="song-list-name">{{music.name}}</div>
                <div class="song-list-info">
                    <div class="song-length">{{music.length}}首&ensp; </div>
                    <div class="song-author">by {{music.author}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftList',
    data() {
        return {
            musicList: [
                {
                    image: '',
                    name: '逃跑计划：夜空中最亮的星',
                    length: 30,
                    author: '龙晓雯'
                },
                {
                    image: '',
                    name: '华晨宇 | 三张歌曲专辑完整版',
                    length: 29,
                    author: '龙晓雯'
                },
                {
                    image: '',
                    name: '世界上最好听的钢琴曲',
                    length: 62,
                    author: '龙晓雯'
                }
            ]
                
        }
    }
}
</script>
