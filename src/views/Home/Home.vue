<style lang="less">
.playlist-container {
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  // width: 100%;  // 不能设置为宽度100%， 否则会溢出section
  height: 100%;
  margin: 0;
  padding: 40px;
}
</style>

<template>
  <Layout>
    <template #music-card>
      <div class="playlist-container">
        <Category @swapHotNewCategory="swapHotNewCategory" />
        <PlayList :data="topPlayList" />
        <Paging :data="totalPlay" @clickPage="clickPage" />
      </div>
    </template>
  </Layout>
</template>

<script>
// @ is an alias to /src

import Layout from '@/components/Layout.vue';
import PlayList from '@/views/Home/PlayList.vue';
import Category from '@/views/Home/Category.vue';
import Paging from '@/views/Home/Paging.vue';
// 在vue组件中使用时，我们通常会使用mapGetters、mapActions、mapMutations，
// 然后就可以按照vue调用methods和computed的方式去调用这些变量或函数
import { mapState, mapMutations, mapActions } from 'vuex';
import { INCREMENT } from '@/mutation_types';

export default {
    'name': 'Home',
    'components': {
        Layout,
        PlayList,
        Category,
        Paging
    },
    data() {
        return {
            'localCount': 0,
            'movies': this.$store.getters.singleMovies(3),
            'message': '',
            'musicNames': '',
            'category': 'hot',
            'limit': 35,
            'offset': 0
        };
    },
    'created': function() {
    // 当初始化此页面的时候，调用store 中的 actions 中的 fetchTopPlayListAsync 方法
    // 并传递参数
        this.fetchTopPlayListAsync({
            'order': this.category,
            'limit': this.limit,
            'offset': this.offset
        });
    },
    'mounted': function() {
        console.log('初始化成功');
    },
    'computed': mapState({
    // mapState 做一次映射
    // 把 store 中 state 中的数据映射到 Home 中相应的变量
        'topPlayList': (state) => state.topPlayList,
        'totalPlay': (state) => state.totalPlay,
        'count': (state) => state.count,
        'countAlias': 'count',
        countPlusLocalState(state) {
            return parseInt(state.count, 10) + parseInt(this.localCount || 0, 10);
        },
        'filterMovies': (state, getters) => {
            return getters.filterMovies;
        }
    }),
    'methods': {
        ...mapMutations({
            'increment': INCREMENT
        }),
        ...mapActions({
            'incrementAsync': 'incrementAsync',
            'filterAsync': 'filterAsync',
            'fetchTopPlayListAsync': 'fetchTopPlayListAsync'
        }),
        'handleFilter': function() {
            this.filterAsync({ 'value': parseInt(this.localCount || 0, 10) }).then(() => {
                this.message = '筛选成功';
            });
        },
        'handleIncrement': function() {
            this.incrementAsync({ 'value': parseInt(this.localCount || 0, 10) }).then(
                () => {
                    this.message = '增值成功';
                }
            );
        },
        'swapHotNewCategory': function(data) {
            this.category = data.value;
            this.fetchTopPlayListAsync({
                'order': this.category,
                'limit': this.limit,
                'offset': this.offset
            });
        },
        'clickPage': function(data) {
            this.offset = data.value;

            this.fetchTopPlayListAsync({
                'order': this.category,
                'limit': this.limit,
                'offset': this.offset
            });
        }
    }
};
</script>
