<style lang="less" scoped>
    .playlist-detail {
        .playlist-detail-container {
        background-color: #fff;
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
        // width: 100%;  // 不能设置为宽度100%， 否则会溢出section
        height: 100%;
        margin: 0;
        // padding: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        > .right-content {
            width: 740px;
            margin: 0;
        }
        > .right-info {
            width: 240px;
            margin: 0;
            border-left: 1px solid #d3d3d3;
        }
        
    }
}
</style>

<template>
    <div class="playlist-detail">
        <Layout>
            <template v-slot:song-card>
                <div class="playlist-detail-container">
                    <RightContent :myPlayListDetail="myPlayListDetail" class="right-content"></RightContent>
                    <RightInfo :data="subscribers" class="right-info"></RightInfo>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import RightContent from '@/views/MyMusic/RightContent.vue';
import RightInfo from '@/views/PlayListDetail/RightInfo.vue';

import { mapActions, mapState } from 'vuex';

export default {
    name: 'playlist-detail',
    data() {
        return {
            playListId: this.$route.params.id,
        }
    },
    computed: {
        ...mapState({
            myPlayListDetail: state => state.myPlayListDetail,
            subscribers: state => state.myPlayListDetail.subscribers
        })
    },
    components: {
        Layout,
        RightContent,
        RightInfo,
    },
    mounted() {
        this.fetchMyPlayListDetailAsync({id: this.playListId});
    },
    methods: {
        ...mapActions({
            fetchMyPlayListDetailAsync: 'fetchMyPlayListDetailAsync'
        })
    },
    // 加入组件销毁生命周期，当离开页面时，组件会销毁
    destroyed() {
    }
}
</script>