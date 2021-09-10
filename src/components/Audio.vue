<template>
  <div class="netease-music-player" />
</template>

<script lang="ts">
// getAudioEvent 定义播放器的不同状态
import getAudioEvent from '../config/AudioEvent';
import eventBus from '@/utils/eventBus';
import { defineComponent } from 'vue';
// audio 组件只调用一次，因为audio 组件是挂载到 index.html 中的，和 App.vue 并列，
// 所以并不会随着切换页面再次调用
export default defineComponent({
    'props': {},
    data() {
        return {
            'controller': null, // 不同的播放渠道
            'audioEvent': getAudioEvent(''),
            // publishAudioEvent: getAudioEvent(''), // 暂时没有广播
            'audioState': {
                // 播放器的状态
                'isPlay': false,
                'muted': false,
                'currentTime': 0,
                'duration': 0,
                'src': ''
            },
            'audioDOM': document.getElementById('netease-music-player') as HTMLAudioElement
        };
    },
    mounted() {
        this.audioDOM = document.getElementById('netease-music-player') as HTMLAudioElement; // 得到index.html中audio标签DOM元素
        this.initialPlayer();
    },
    methods: {
        initialPlayer() {
            // 初始化播放器
            if (this.audioDOM) {
                this.audioDOM.onended = this._handleOnEnded;
                this.audioDOM.onerror = this._handleOnError;
                this.audioDOM.ontimeupdate = this._handleOnTimeUpdate;
                this.audioDOM.oncanplay = this._handleOnCanPlay;
                this.audioDOM.oncanplaythrough = this._handleOnPlayThrough;
                // this.$root 指向Vue实例本身，Vue项目其实是一个Vue实例
                // $on 在Vue实例上监听事件，当监听到变化时，执行相应的方法
                eventBus.$on(this.audioEvent.SETCONTROLL, (controllerName: string) => {
                    // 切换控制权
                    this.audioEvent = getAudioEvent(controllerName); // controllerName 不同的事件名
                });
                // $on监听INITIALAUDIO事件，然后执行audio 标签的原生方法load(), 因为autoplay设置为true， 会自动播放
                // 否则也可以使用play() 或者setSrc() 等audio的原生方法
                eventBus.$on(this.audioEvent.INITIALAUDIO, (options: any) => {
                    const initialOptions = {
                        'loop': true,
                        'controlls': 'controls',
                        'autoplay': true,
                        'src': null,
                        'preload': 'auto',
                        'muted': true,
                        ...options
                    };
    
                    for (const key in options) {
                        (this.audioDOM as any)[key] = initialOptions[key];
                    }
                    this.audioDOM.load();
                    // 对象析构
                    this.audioState = {
                        ...this.audioState,
                        ...initialOptions,
                        'currentTime': 0
                    };
                });
                // 监听PLAY事件，当PLAY事件发生时，调用play()方法
                eventBus.$on(this.audioEvent.PLAY, () => {
                    this.play();
                });
                // 增加切歌API
                eventBus.$on(this.audioEvent.PAUSE, () => {
                    this.pause();
                });
    
                eventBus.$on(this.audioEvent.SETSRC, (options: { src: string, autoplay: true }) => {
                    this.setSrc(options.src, options.autoplay);
                });
            }
        },
        play() {
            // this.audioDOM.load();
            const playPromise = this.audioDOM.play(); // 调用原生audio的play()方法

            if (typeof playPromise !== 'undefined') {
                playPromise
                    .then(() => {
                        // playPromise 同步执行
                        // 可以播放了
                        // this.audioDOM.pause();
                        this.audioState = {
                            ...this.audioState,
                            'isPlay': true // isPlaying 设置为true
                        };
                        eventBus.$emit(this.audioEvent.ONPLAY); // 向Vue实例发射ONPLAY事件
                    })
                    .catch((e) => {
                        // 自动播放失败
                        this.audioDOM.play();
                        console.log(e, 'e');
                    });
            } else {
                // 可以播放了
                this.audioDOM.play();
                this.audioState = {
                    ...this.audioState,
                    'isPlay': true
                };
                eventBus.$emit(this.audioEvent.ONPLAY);
            }
        },
        pause() {
            if (this.audioDOM) {
                this.audioDOM?.pause();
                this.audioState = {
                    ...this.audioState,
                    'isPlay': false // isPlaying 设置为false
                };
                // this.$root = this.$audio， 因为$audio已经挂载到全局的Vue实例上了
                // 发布-订阅模式。Vue事件总线已经封装了publish，subscribe
                // $emit发布ONPAUSE事件，其他地方使用$on订阅ONPAUSE事件，然后执行相应的操作
                eventBus.$emit(this.audioEvent.ONPAUSE); // 向Vue实例发射ONPAUSE事件
            }
        },
        setSrc(src: string, autoPlay = true): void {
            if (this.audioDOM) {
                // 切换歌曲
                this.audioDOM.src = src;
                if (!autoPlay) {
                    this.audioDOM.autoplay = false;
                }
                this.audioState = {
                    ...this.audioState,
                    'src': src,
                    'currentTime': 0
                };
            }
        },
        _handleOnEnded() {
            if (this.audioEvent) {
                eventBus.$emit(this.audioEvent.ONENDED);
            }
        },
        _handleOnError(e: string | Event) {
            eventBus.$emit(this.audioEvent.ONERROR, { 'error': e });
        },
        _handleOnTimeUpdate() {
            const duration = this.audioDOM.duration,
                // 这里的ratio变化周期是duration/100, 共变化100次。
                // 每次ratio发生变化时，进度条会相应变化。由于每首歌的duration不同，导致ratio的变化周期不同，
                // 使用transition做动画的时候，不容易设置动画时间，会有动画卡顿
                ratio = Math.round(this.audioDOM.currentTime * 100 / duration),
                time = Math.round(this.audioDOM.currentTime);

            this.audioState = {
                ...this.audioState,
                'currentTime': time,
                'duration': duration
            };
            eventBus.$emit(this.audioEvent.ONTIMEUPDATE, { ratio, time, duration });
        },
        _handleOnCanPlay() {
            // 可以开始播放时, 可以播放，但是不知道为何不成功
            eventBus.$emit(this.audioEvent.ONCANPLAY);
        },
        _handleOnPlayThrough() {
            eventBus.$emit(this.audioEvent.ONCANPLAYTHROUGH);
            this.play();
        }
    }
});
</script>
