<template>
    <div />
</template>

<script>
import getAudioEvent from '../config/AudioEvent';

export default {
    data() {
        return {
            controller: null,
            audioEvent: null,
            publishAudioEvent: getAudioEvent(''),
            audioState: {
                isPlay: false,
                muted: false,
                currentTime: 0,
                duration: 0,
                src: null,
            }
        };
    },
    mounted: function () {
        this.audioDOM = document.getElementById('netease-music-player');
        this.initialPlayer();
    },
    methods: {
        initialPlayer: function () {
            // 初始化播放器
            this.audioDOM.onended = this._handleOnEnded;
            this.audioDOM.onError = this._handleOnError;
            this.audioDOM.ontimeupdate = this._handleOnTimeUpdate;
            this.audioDOM.oncanplay = this._handleOnCanPlay;
            this.audioDOM.oncanplaythrough = this._handleOnPlayThrough;
            this.$root.$on(this.audioEvent.SETCONTROLL, (controllerName) => {
                // 切换控制权
                this.audioEvent = getAudioEvent(controllerName);
            });
            this.$root.$on(this.audioEvent.INITIALAUDIO, (options) => {
                const initialOptions = {
                    loop: true,
                    controlls: 'controls',
                    autoplay: true,
                    src: null,
                    preload: 'auto',
                    muted: true,
                    ...options
                };
                for (let key in options) {
                    this.audioDOM[key] = initialOptions[key];
                }
                this.audioDOM.load();
                this.audioState = {
                    ...this.audioState,
                    ...initialOptions,
                    currentTime: 0,
                };
            });
            this.$root.$on(this.audioEvent.PLAY, () => {
                this.play();
            });
            // 增加切歌API
        },
        play: function () {
            // this.audioDOM.load();
            const playPromise = this.audioDOM.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // 可以播放了
                    // this.audioDOM.pause();
                    this.audioState = {
                        ...this.audioState,
                        isPlay: true
                    };
                    this.$root.$emit(this.audioEvent.ONPLAY);
                }).catch(e => {
                    // 自动播放失败
                    this.audioDOM.play();
                    console.log(e, 'e');
                });
            } else {
                // 可以播放了
                this.audioDOM.play();
                this.audioState = {
                    ...this.audioState,
                    isPlay: true
                };
                this.$root.$emit(this.audioEvent.ONPLAY);
            }
        },
        pause: function () {
            this.audioDOM.pause();
            this.audioState = {
                ...this.audioState,
                isPlay: false
            };
            this.$root.$emit(this.audioEvent.ONPAUSE);
        },
        setSrc: function (src, autoPlay = true) {
            // 切换歌曲
            this.audioDOM.src = src;
            if (!autoPlay) {
                this.audioDOM.autoPlay = false;
            }
            this.audioState = {
                ...this.audioState,
                src: src,
                currentTime: 0
            };
        },
        _handleOnEnded: function() {
            if (this.audioEvent) {
                this.$root.$emit(this.audioEvent.ONENDED);
            }
            this.$root.$emit(this.publishAudioEvent.ONENDED);
        },
        _handleOnError: function(e) {
            this.$root.$emit(this.audioEvent.ONERROR, { error: e });
        },
        _handleOnTimeUpdate: function() {
            const ratio = Math.round(this.audioDOM.currentTime / this.audioDOM.duration);
            const time = Math.round(this.audioDOM.currentTime);
            this.audioState = {
                ...this.audioState,
                currentTime: time,
                duration: this.audioDOM.duration
            };
            this.$root.$emit(this.audioEvent.ONTIMEUPTDAE, { ratio, time });
        },
        _handleOnCanPlay: function() {
            // 可以开始播放时, 可以播放，但是不知道为何不成功
            this.$root.$emit(this.audioEvent.ONCANPLAY);
        },
        _handleOnPlayThrough: function() {
            this.$root.$emit(this.audioEvent.ONCANPLAYTHROUGH);
            this.play();
        }
    }
}
</script>


