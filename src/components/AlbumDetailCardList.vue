<style lang="less" scoped>
    .container {
        position: relative;
        margin: 20px 0 0 -42px;
        box-sizing: content-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding-inline-start: 0px;
        flex-wrap: wrap;

        > .album_card {
            width: 140px;
            height: 204px;
            list-style: none;
            text-align: -webkit-match-parent;
            list-style-type: disc;
            overflow: hidden;
            padding: 0 0 30px 42px;
            box-sizing: content-box;
            flex-grow: 0;
            flex-shrink: 0;
            > .cover {
                width: 140px;
                height: 140px;
                line-height: 1.4;
                text-align: -webkit-match-parent;
                > img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            > .desc {
                margin: 8px 0 3px;
                font-size: 14px;
                width: 100%;
                > .title {
                    font-size: 14px;
                    color: #000;
                }
            }
        }
    }
</style>
<template>
    <ul class="container">
        <li v-for="item in albums" class="album_card" v-bind:key="item.id">
            <div class="cover">
                <img v-bind:src="item.picUrl" />
                <div class="bottom">
                    <span class="icon-headset"></span>
                    <span class="number">{{item.playCount}}</span>
                    <span class="icon-play"></span>
                </div>
            </div>
            <p class="desc">
                <span class="title">{{item.name}}</span>
            </p>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { IAlbumDetail } from '@/model/MusicSuggestion';

export default defineComponent({
    name: 'AlbumDetailCardList',
    props: {
        albums: {
            type: Array as PropType<IAlbumDetail[]>,
            required: true
        }
    },
    data() {
        return {};
    },
    computed: {
        albumsData() {
            console.log(this.albums, 'this.albums');
            return this.albums;
        }
    },
    methods: {

    }
});
</script>