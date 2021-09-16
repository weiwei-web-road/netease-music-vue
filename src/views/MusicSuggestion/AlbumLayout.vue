<style lang="less" scoped>
    .albums_layout {
        width: 100%;
        .header {
            height: 33px;
            padding: 0 10px 0 34px;
            background-position: -225px -156px;
            border-bottom: 2px solid #C10D0C;
        }
    }
</style>

<template>
    <div class="album_layout">
        <div class="header"></div>
        <div class="body"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['title', 'hasExtra', 'extraToggle']
});
</script>