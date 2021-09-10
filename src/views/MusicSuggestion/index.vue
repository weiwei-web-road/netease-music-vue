<style lang="less" scoped>
    .music-suggestion {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 400px;

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
<Layout>
    <template #music-card>
        <div class="music-suggestion">
            <div class="header">头部走马灯</div>
            <div class="body"></div>
            <div class="footer">尾部法律告诫</div>
        </div>
    </template>
</Layout>
</template>
<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import { ElMessage } from 'element-plus';
import Layout from '@/components/Layout.vue';
import { IAlbumDetail } from '@/model/MusicSuggestion';


export default defineComponent(
    {
        'name': 'MusicSuggestion',
        components: {
            Layout
        },
        data() {
            return {};
        },
        created: function() {
            this.fetchRecommandAlbum({}).then(() => {
                ElMessage.success('推荐列表拉取成功');
            }).catch((error: Error) => {
                ElMessage.error(error.message);
            });
        },
        computed: mapState({
            'recommandAlbums': (state: any) => state.recommandAlbums as IAlbumDetail[]
        }),
        'methods': mapActions({
            'fetchRecommandAlbum': 'fetchRecommandAlbum'
        })
    }
);
</script>
