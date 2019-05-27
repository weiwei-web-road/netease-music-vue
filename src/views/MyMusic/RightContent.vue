<style lang="less" scoped>
    .song-content-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        > .song-introduction {
            height: 328px;
            padding: 40px;
            box-sizing: border-box; // include content + padding + border
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            > .image-border {
                border: 1px solid #dfdfdf;
                padding: 4px;
                height: 208px;
                width: 208px;
                box-sizing: border-box;
                flex: 0 0 auto;
                > img{
                    width: 100%;
                    height: 100%;
                }
            }
            > .introduction-content {
                margin: 0 0 0 27px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                > .song-name {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                    > .song-list-icon {
                        background: url('../../assets/icon.png');
                        background-position: 0 -243px;
                        background-repeat: no-repeat;
                        margin: 5px 6px 10px 0;
                        width: 54px;
                        height: 24px;
                        > .icon {
                            background-image: url('../../assets/white-r-icon.png');
                            display: inline-block;
                            width: 8px;
                            height: 8px;
                            top: -6px;
                            background-size: cover;
                            left: 34px;
                            position: relative;
                        }
                    }
                    > .name {
                        font-size: 20px;
                        color: #333333;
                        
                    }
                }
                > .song-author {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    margin: 0 0 20px;
                    font-size: 12px;
                    > img {
                        width: 35px;
                        height: 35px;
                    }
                    > .author-name {
                        margin: 0 0 0 10px;
                        color: #0C73C2;
                        display: flex;
                        align-items: center;
                    }
                    > .create-time {
                        margin: 0 0 0 15px;
                        color: #999999;
                        display: flex;
                        align-items: center;
                    }
                }
                > .song-play-button {
                    margin: 0 -10px 25px 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    > .play {
                        background-image: url('../../assets/button2.png');
                        background-position: right -428px;
                        background-repeat: no-repeat;
                        text-decoration: none;
                        padding: 0 5px 0 0;
                        white-space: nowrap;
                    }
                }
                > .song-mark {
                        font-size: 12px;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                    > .mark {
                        color: #666666;
                    }
                    > .mark-content {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        > a {
                            background-image: url('../../assets/button2.png');
                            background-position: 0 0;
                            background-repeat: no-repeat;
                            padding: 0 3px 0 13px;
                            color: #777;
                            height: 22px;
                            line-height: 22px;
                        }
                    }
                }
                > .song-detail {
                    margin: 4px 0 0;
                    font-size: 12px;
                    color: #666666;
                    overflow: hidden;
                    text-align: left;
                    // text-overflow: ellipsis; // ...
                    // white-space: nowrap; // 不让换行，不然没有...
                }
            }

           
        }
        > .song-list {

        }
    }
</style>


<template>
    <div class="song-content-container">
        <div class="song-introduction">
            <div class="image-border">
                <img src="../../assets/song_img.jpeg">
            </div>
            <div class="introduction-content">
                <div class="song-name">
                    <div class="song-list-icon">
                        <span class="icon"></span>
                    </div>
                    <div class="name">逃跑计划：夜空中最亮的星
                    </div>
                </div>

                <div class="song-author">
                    <img src="../../assets/song_img.jpeg">
                    <div class="author-name">龙晓雯
                    </div>
                    <div class="create-time">2015-06-07 创建
                    </div>
                </div>

                <div class="song-play-button">
                    <a class="play">播放</a>
                </div>

                <div class="song-mark">
                    <div class="mark">标签：</div>
                    <div class="mark-content" v-for="mark in markList" v-bind:key="mark">
                        <a>
                            <i>{{mark}}</i>
                        </a>
                    </div> 

                </div>

                <div class="song-detail">
                    介绍：逃跑计划乐队，又称Escape Plan乐队，中国流行摇滚乐队，乐队由毛川、马晓东、刚昂、红桃组成。逃跑计划乐队的前身是孔雀乐队，成立于2004年底，直到2007年夏天贝司手小刚的加入，乐队得以正式确立，并且乐队的音乐...
                </div>

            </div>
        </div>
        <div class="song-list">song list</div>
    </div>
</template>

<script>
export default {
    name: 'RightContent',
    data() {
        return {
            markList: ['华语', '流行', '清新']
        }
    }
}
</script>
