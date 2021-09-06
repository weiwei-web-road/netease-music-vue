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
        <el-breadcrumb-item :to="{ path: '/' }">
          首页
        </el-breadcrumb-item>
        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
        <el-breadcrumb-item>个人学习区域</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="body">
      <multiSelect />
      <footerPagination
        class="common-padding"
        :total-list-num="100"
      />
      <limitDoubleDateSearch
        class="common-padding"
        style="width: 300px;"
        :init-msg="dateInit"
        :get-data="changeDate"
      />
      <radioSelect class="common-padding" />
      <elTooltipHover class="common-padding" />
      <timePicker
        :init-time="initTime"
        :get-data="getSelectedTime"
      />
    </div>
  </div>
</template>

<script>
import '../../plugins/element.js'
import multiSelect from './multiSelect.vue'
import footerPagination from './Pagination.vue'
import limitDoubleDateSearch from './doubleDateSearch.vue'
import radioSelect from './radioSelect.vue'
import elTooltipHover from './elTooltip.vue'
import timePicker from './timePicker.vue'

export default {
  name: 'Spread',
  components: {
    multiSelect,
    footerPagination,
    limitDoubleDateSearch,
    radioSelect,
    elTooltipHover,
    timePicker

  },
  data () {
    return {
      // double search date
      dateInit: 'Search By Date',
      // time picker
      initTime: new Date()

    }
  },
  mounted () {
    this.convertStrToArr()
  },
  methods: {
    convertStrToArr () {
      let str; let arr; const res = []
      const value = '["baoma","chenxin"]'
      if (value.length > 4) {
        str = value.substring(1, value.length - 1)
        arr = str.split(',')
        arr.forEach(item => {
          const temp = item.substring(1, item.length - 1)
          res.push(temp)
        })
      }
      return res
    }

  }

}
</script>
