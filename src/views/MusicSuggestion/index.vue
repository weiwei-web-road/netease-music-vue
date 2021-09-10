<style lang="less" scoped>
    .music-suggestion {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .header {
            width: 100%;
            height: 200px;
        }
        .body {
            width: 980px;
            min-height: 700px;
        }
        .footer {
            position: relative;
            height: 172px;
            overflow: hidden;
            border-top: 1px solid #d3d3d3;
            background: #f2f2f2;
        }
    }
</style>

<template>
    <div class="music-suggestion">
        <div class="header">头部走马灯</div>
        <div class="body"></div>
        <div class="footer">尾部法律告诫</div>
    </div>
</template>
<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { defineComponent, PropType } from 'vue';

export default defineComponent(
    {
        'name': 'MusicSuggestion',
        data() {
            return {};
        },
        'created': function() {
            this.fetchRecommandAlbum({});
        },
        'computed': mapState({
            'recommandAlbums': (state: any) => state.recommandAlbums
        }),
        'methods': mapActions({
            'fetchRecommandAlbum': 'fetchRecommandAlbum'
        })
    }
);
</script>
