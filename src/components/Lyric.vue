<style lang="less" scoped>
    .lyric-container {
        width: 415px;
        height: 259px;
        overflow: scroll;
        color: #989898;
        word-wrap: break-word;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > .item {
            width: 354px;
            height: 32px;
            line-height: 32px;
        }
    }
</style>
<template>
    <div class="lyric-container">
        <div class="item" v-for="(item, index) of lyric" :key="index">
            {{item.content}}
        </div>
    </div>
</template>
<script>
export default {
    props: ['lyric']
}
</script>

