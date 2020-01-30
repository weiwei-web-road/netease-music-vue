<style lang="less" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        margin: 0; // 去掉 div 默认的 marign padding
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        background-color: #333;

    }
    .player-container {
        width: 980px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        // 溢出的东西直接 hidden
        overflow: hidden;
        
        > .btn {
            width: 137px;
            padding: 6px 0 0 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            height: 42px;
            box-sizing: border-box;
            > .prev-song {
                width: 28px;
                height: 28px;
                margin-right: 8px;
                margin-top: 5px;
                text-indent: -9999px;
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: 0 -130px; // 顺序很重要 background-position 必须在 background 后面

            }
            > .audio-status {
                width: 36px;
                height: 36px;
                margin-top: 0;
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                margin-right: 8px;
                text-indent: -9999px;
            }
            > .pause {
                background-position: 0 -165px;
            }
            > .play {
                background-position: 0 -204px;
            }
            > .next-song {
                width: 28px;
                height: 28px;
                margin-right: 8px;
                margin-top: 5px;
                text-indent: -9999px;
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: -80px -130px;
            }
        }
        > .head-img {
            width: 34px;
            height: 34px;
            margin: 6px 15px 0 0;
            > img {
                width: 34px;
                height: 34px;
                border-radius: 3px;
            }
        }
        > .play-status {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            > .play-title {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                font-size: 12px;
                height: 28px;
                > .song-name {
                    color: #e8e8e8;
                    margin-right: 15px;
                }
                > .singer {
                    color: #9b9b9b;
                }
            }

        }
    }
</style>

<template>
    <div class="wrapper">
        <div class="player-container">
            <div class="btn">
                <a class="prev-song"></a>
                <a :class="{'audio-status': true, 'pause': isPlaying, 'play': !isPlaying}" @click="handleTroggle"></a>
                <a class="next-song"></a> 
            </div>

            <div class="head-img">
                <img src="../assets/song_img.jpeg">
            </div>

            <div class="play-status">
                <div class="play-title">
                    <div class="song-name">因为理想</div>
                    <div class="singer">逃跑计划</div>
                </div>

                <div class="play-bar">
                    <div class="bar">
                        <div class="black-bar">
                        </div>
                        <div class="red-bar"></div>
                    </div>
                    <div class="play-time"></div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import getAudioEvent from '../config/AudioEvent';
const audioEvent = getAudioEvent('player');

export default {
    data() {
        return {
            isPlaying: false,
        }
    },
    mounted() {
        this.initialSong();
    },
    methods: {
        play() {
            // this.$audio = this.$root, 因为$audio 已经被挂载到全局Vue实例上了
            // 向Vue实例发射事件INITIALAUDIO，并且带着实参src等，也可以直接调用play()或者setSrc()
            // audioComponent 组件里面，有$on在监听INITIALAUDIO事件，然后触发响应的方法
            // this.$audio.$emit(audioEvent.PLAY, {
            //     src: 'http://sf3-ttcdn-tos.pstatp.com/obj/ttfe/cg/homed/a8772889f38dfcb91c04da915b301617.mp3'
            // });

            this.$audio.$emit(audioEvent.PLAY);
        },
        pause() {
            this.$audio.$emit(audioEvent.PAUSE);
        },
        handleTroggle() {
            if (this.isPlaying) {
                this.isPlaying = false;
                this.pause();
            } else {
                this.isPlaying = true;
                this.play();
            }
        },
        initialSong() {
            this.$audio.$emit(audioEvent.SETSRC, {
                src: 'http://sf3-ttcdn-tos.pstatp.com/obj/ttfe/cg/homed/a8772889f38dfcb91c04da915b301617.mp3', 
                autoplay: true});
            // to do
            // 归零所有的控制信息，进度条，歌曲的信息，歌词，
        }
    }
}
</script>

