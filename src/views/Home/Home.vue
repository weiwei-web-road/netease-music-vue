<style lang="less">
  .home {
    .playlist-container {
      background-color: #fff;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
      // width: 100%;  // 不能设置为宽度100%， 否则会溢出section
      height: 100%;
      margin: 0;
      padding: 40px;
      
    }
  }
</style>

<template>
  <div class="home">
    <Layout>
      <template v-slot:music-card>
        <div class="playlist-container" >
            <Category></Category>
            <PlayList v-bind:data="topPlayList"></PlayList>
        </div>
      </template>
      
    </Layout>

    <!-- <p>{{ countPlusLocalState }}</p>
    <input v-model="localCount" />
    <button v-on:click="handleFilter">筛选</button>
    <button v-on:click="handleIncrement">增加</button>
    <label>{{message}}</label>
    <ul id="movies">
      <li v-bind:key="item" v-for="item in filterMovies">{{ item }}</li>
    </ul> -->
  </div>
</template>

<script>
// @ is an alias to /src

import Layout from '@/components/Layout.vue';
import PlayList from '@/views/Home/PlayList.vue';
import Category from '@/views/Home/Category.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import { INCREMENT } from '@/mutation_types';

export default {
  name: 'home',
  data() {
    return {
      localCount: 0,
      movies: this.$store.getters.singleMovies(3),
      message: '',
      musicNames: '',
    };
  },
  created: function() {
    this.fetchTopPlayListAsync({
      order: 'hot',
      limit: '100'
    });
  },
  components: {
    Layout,
    PlayList,
    Category,
  },
  computed: mapState({
    // mapState 做一次映射
    topPlayList: state => state.topPlayList,
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
      return parseInt(state.count) + parseInt(this.localCount || 0)
    },
    filterMovies: (state, getters) => {
      return getters.filterMovies;
    }
  }),
  watch: {
    localCount: function (val) {
      console.log(val);
    }
  },
  methods: {
    ...mapMutations({
      increment: INCREMENT,
    }),
    ...mapActions({
      incrementAsync: 'incrementAsync',
      filterAsync: 'filterAsync',
      fetchTopPlayListAsync: 'fetchTopPlayListAsync',
    }),
    handleFilter: function (event) {
      console.log(event);
      this.filterAsync({ value: parseInt(this.localCount || 0)}).then(() => {
        this.message = '筛选成功'
      });
    },
    handleIncrement: function(event) {
      console.log(event);
      this.incrementAsync({ value: parseInt(this.localCount || 0)}).then(() => {
        this.message = '增值成功'
      });
    }
  }
}
</script>
