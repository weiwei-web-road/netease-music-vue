<style lang="less">
.my-music {
  .my-music-playlist-container {
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
    > .left-title {
      width: 240px;
      margin: 0;
      border-right: 1px solid #d3d3d3;
    }
    > .right-content {
      width: 740px;
      margin: 0;
    }
  }
}
</style>

<template>
  <div class="my-music">
    <Layout>
      <template #song-card>
        <div class="my-music-playlist-container">
          <LeftTitle :data="myPlayList" class="left-title" />
          <!-- <RightContent class="right-content"></RightContent> -->
          <RightContent
            :my-play-list-detail="myPlayListDetail"
            class="right-content"
          />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import LeftTitle from '@/views/MyMusic/LeftTitle.vue';
import RightContent from '@/views/MyMusic/RightContent.vue';
import { mapState, mapActions } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
    'name': 'MyMusic',
    'components': {
        Layout,
        LeftTitle,
        RightContent
    },
    data() {
        return {};
    },
    created() {
        (this as any).fetchMyPlayListAsync({
            'uid': 77680183
        }).then((id: string) => {
            (this as any).fetchMyPlayListDetailAsync(id);
        });
    },
    'computed': mapState({
        'myPlayList': (state: any) => state.myPlayList,
        'myPlayListDetail': (state: any) => state.myPlayListDetail,
        'rendermyPlayListDetail': (state: any) => state.rendermyPlayListDetail
    }),
    'methods': {
        ...mapActions({
            fetchMyPlayListAsync: 'fetchMyPlayListAsync',
            'fetchMyPlayListDetailAsync': 'fetchMyPlayListDetailAsync'
        })
    }
});
</script>
