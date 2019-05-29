<style lang="less">
    .song-content-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        > .song-introduction {
            // height: 328px;
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
                    // background-color: #3874bd;
                    width: 70px;
                    padding: 0 5px 0 10px;
                    box-sizing: border-box;
                    border-radius: 3px;
                    // background: linear-gradient(to bottom, #518dd0 0%,#3874bd 100%);
                    background: linear-gradient(to bottom, rgb(79, 140, 209) 0%, rgb(56, 116,189) 100%);
                    cursor: pointer;

                    > .play-icon {
                        background: url('../../assets/button2.png') no-repeat 0 9999px;
                        text-decoration: none;
                        width: 20px;
                        height: 18px;
                        margin: 6px 2px 2px 0;
                        background-position: 0 -1622px;
                        overflow: hidden;
                    }
                    > .play {
                        color: #fff;
                        font-size: 12px;
                        height: 31px;
                        line-height: 31px;
                    }
                }
                > .song-mark {
                        font-size: 12px;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                    > .mark {
                        color: #666666;
                        height: 22px;
                        line-height: 22px;
                    }
                    > .mark-content {
                        box-sizing: border-box;
                        margin-right: 10px;
                        height: 22px;
                        display: inline-block;
                        padding: 0 13px;
                        border: 1px solid rgb(214, 214, 214);
                        border-radius: 11px;

                        line-height: 20px;
                        color: #2c3e50;
                        background: linear-gradient(to top, #f7f7f7 0%,#f1f1f1 100%);
                    }
                }
                > .song-detail {
                    margin: 8px 0 0;
                    font-size: 12px;
                    color: #666666;
                    overflow: hidden;
                    text-align: left;
                    height: 54px;
                    // text-overflow: ellipsis; // ...
                    // white-space: nowrap; // 不让换行，不然没有...
                }
            }
        }
        .song-list-container {
            display: flex;
            justify-content: space-between;
            padding: 0 10px 0 32px;
            align-items: center;
            border-bottom: 2px solid #c20c0c;
            > .left-side {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                > .song-list-name {
                    font-size: 20px;
                    color: #333333;
                }
                > .song-list-length {
                    font-size: 12px;
                    color: #666666;
                    margin: 9px 0 0 20px;
                }
            }
            > .play-count {
                font-size: 12px;
                color: #666666;
                margin: 5px 0 0;
                float: right;
                height: 28px;
                line-height: 28px;
                > span {
                    font-weight: bold;
                    color: #c20c0c;
                }
            }
        }
        > .song-list-table {
            display: flex;
            align-items: center;
            background: linear-gradient(to bottom, #f7f7f7 0%,#f1f1f1 100%);
            border-bottom: 1px solid #d6d6d6;
            th {
                text-align: left;
                font-weight: normal;
                color: #666;
                font-size: 12px;
                border-right: 1px solid #d6d6d6;
                height: 18px;
                line-height: 18px;
                padding: 8px 10px;
            }
            
        }
        .first-title {
            width: 54px;
        }
        .second-title {
            width: 283px;
        }
        .third-title {
            width: 91px;
        }
        .fourth-title {
            width: 83px;
        }
        .fifth-title {
            width: 125px;
            
        }
        > .song-list-content {
            margin-top: 2px;
            display: flex;
            align-items: center;
            > .common {
                text-align: left;
                font-weight: normal;
                color: #666;
                font-size: 12px;
                height: 18px;
                line-height: 18px;
                padding: 8px 10px;
                overflow: hidden;
                text-overflow: ellipsis; // ...
                white-space: nowrap; // 不让换行，不然没有...
                > .play-icon {
                    background: url('../../assets/table.png') no-repeat 0 9999px;
                    width: 17px;
                    height: 17px;
                    cursor: pointer;
                    background-position: 0 -103px;
                    float: right;
                }
            }
            > .black-color {
                color: #333333;
            }
        }
        > .odd {
            background-color: #f7f7f7;
        }
        
    }
    
</style>


<template>
    <div class="song-content-container" v-if="rendermyPlayListDetail">
        <div class="song-introduction">
            <div class="image-border">
                <img v-bind:src="myPlayListDetail.coverImgUrl">
            </div>
            <div class="introduction-content">
                <div class="song-name">
                    <div class="song-list-icon">
                        <span class="icon"></span>
                    </div>
                    <div class="name">{{myPlayListDetail.name}}
                    </div>
                </div>

                <div class="song-author">
                    <img v-bind:src="myPlayListDetail.creatorAvatarUrl">
                    <div class="author-name">{{myPlayListDetail.creatorNickName}}
                    </div>
                    <div class="create-time">2015-06-07 创建
                    </div>
                </div>

                <div class="song-play-button">
                    <div class="play-icon"></div>
                    <div class="play">播放</div>
                </div>

                <div class="song-mark" v-if="myPlayListDetail.tags.length > 0">
                    <div class="mark">标签：</div>
                    
                    <div class="mark-content" v-for="mark in myPlayListDetail.tags" v-bind:key="mark">
                        {{mark}}
                    </div>

                </div>

                <div class="song-detail">{{myPlayListDetail.description}}
                    
                </div>

            </div>
        </div>
        <div class="song-list-container">
            <div class="left-side">
                <div class="song-list-name">歌曲列表</div>
                <div class="song-list-length">{{myPlayListDetail.trackCount}}首歌</div>
            </div>
            <div class="play-count">播放：<span>{{myPlayListDetail.playCount}}</span> 次</div>
        </div>
        <table class="song-list-table">
            <th><div class="first-title">&nbsp;</div></th>
            <th><div class="second-title">歌曲标题</div></th>
            <th><div class="third-title">时长</div></th>
            <th><div class="fourth-title">歌手</div></th>
            <th><div class="fifth-title">专辑</div></th>
        </table>

        <div v-bind:class="{'song-list-content': true, odd: index%2===0}" v-for="(item, index) in myPlayListDetail.tracks" v-bind:key="index">
            <div class="first-title common">{{index+1}}
                <span class="play-icon"></span>
            </div>
            <div class="second-title common black-color">{{item.name}}</div>
            <div class="third-title common">04：59</div>
            <div class="fourth-title common black-color">{{item.ar[0].name}}</div>
            <div class="fifth-title common black-color">{{item.al.name}}</div>           
        </div>
        <!-- <div class="song-list-content">
            <div class="first-title common">2
                <span class="play-icon"></span>
            </div>
            <div class="second-title common black-color">卡农（经典钢琴版）</div>
            <div class="third-title common">04：59</div>
            <div class="fourth-title common black-color">dflanf</div>
            <div class="fifth-title common black-color">卡农Canon</div>           
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'RightContent',
    data() {
        return {
        }
    },
    computed: mapState({
        // mapState 做一次映射
        // 把 store 中 state 中的数据映射到 RightContent 中相应的变量
        myPlayListDetail: state => state.myPlayListDetail,
        rendermyPlayListDetail: state => state.rendermyPlayListDetail
    })
}
</script>
