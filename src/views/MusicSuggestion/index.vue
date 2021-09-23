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
            background-color: #fff;
            border: 1px solid #d3d3d3;
            border-width: 0 1px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            > .left {
                padding: 20px 20px 40px;
                width: 729px;
            }
            > .right {
                width: 251px;
            }
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
            <div class="header"></div>
            <div class="body">
                <div class="left">
                    <AlbumLayout has-extra="true" title="热门推荐">
                        <template v-slot:header>
                            <TabsCategory v-bind:options="hotRecommendOptions" />
                        </template>
                        <template v-slot:content>
                            <AlbumDetailCardList v-bind:albums="recommandAlbums" />                        
                        </template>
                    </AlbumLayout>
                </div>
                <div class="right">

                </div>
            </div>
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
import AlbumDetailCardList from '@/components/AlbumDetailCardList.vue';
import AlbumLayout from './AlbumLayout.vue';
import TabsCategory from './TabsCategory.vue';
import { IAlbumDetail } from '@/model/MusicSuggestion';

export default defineComponent(
    {
        'name': 'MusicSuggestion',
        'components': {
            Layout,
            AlbumLayout,
            TabsCategory,
            AlbumDetailCardList
        },
        data() {
            return {
                hotRecommendOptions: [
                    { url: '', title: '华语' },
                    { url: '', title: '流行' },
                    { url: '', title: '摇滚' },
                    { url: '', title: '民谣' },
                    { url: '', title: '电子' }
                ]
            };
        },
        created() {
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
