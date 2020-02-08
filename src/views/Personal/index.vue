<style lang="less" scoped rel="stylesheet/less">
  .personal-study {
    width: 100%;
    padding: 16px;
    > .header {
      margin-bottom: 16px;
    }
    > .body {
      text-align: left;
      .common-padding {
        padding: 16px;
      }
    }
  }
</style>

<template>
  <div class="personal-study">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
        <el-breadcrumb-item>个人学习区域</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="body">
      <multiSelect></multiSelect>
      <footerPagination class="common-padding" :totalListNum="100"></footerPagination>
      <limitDoubleDateSearch class="common-padding" style="width: 300px;" :initMsg='dateInit' :getData='changeDate'></limitDoubleDateSearch>
      <radioSelect class="common-padding"></radioSelect>
      <elTooltipHover class="common-padding"></elTooltipHover>
      <timePicker :initTime="initTime" :getData="getSelectedTime"></timePicker>

    </div>
  </div>
</template>

<script>
import '../../plugins/element.js'
import multiSelect from './multiSelect.vue';
import footerPagination from './Pagination.vue';
import limitDoubleDateSearch from './doubleDateSearch.vue';
import radioSelect from './radioSelect.vue';
import elTooltipHover from './elTooltip.vue';
import timePicker from './timePicker.vue';

export default {
  name: 'Spread',
  data () {
    return {
      // double search date
      dateInit: 'Search By Date',
      // time picker
      initTime: new Date(),

    };
  },
  components: {
    multiSelect,
    footerPagination,
    limitDoubleDateSearch,
    radioSelect,
    elTooltipHover,
    timePicker,

  },
  mounted() {
    this.convertStrToArr();
  },
  methods: {
    convertStrToArr() {
        let str, arr, res = [];
        let value = '["baoma","chenxin"]';
        if (value.length > 4) {
            str = value.substring(1, value.length-1);
            arr = str.split(',');
            arr.forEach(item => {                
                let temp = item.substring(1, item.length-1);
                res.push(temp);
            });
        }
        return res;
    }

  }

};
</script>