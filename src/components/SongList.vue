<style lang="less" scoped>
    .song-list-container{
        position: absolute;
        top: -300px;
        width: 980px;
        height: 300px;
        background-color: #121212;
        color: #ffffff;
        > .title {
            display: flex;
            justify-content: flex-start;
            height: 41px;
            padding: 0 5px;
        }
    }
</style>

<template>
    <div class="song-list-container">
        <div class="title">
            <div class="name">播放列表</div>
            <div class="song-name">歌名</div>
            <div class="close">close</div>
        </div>
        <div class="content">
        </div>
    </div>
</template>

<script>
export default {
    name: 'song-list',
    data() {
        return {

        }
    }
}
</script>