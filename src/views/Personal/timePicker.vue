<style lang="less" scoped>
.select-time-customize {
  padding: 16px;
  .log-create-icon-right /deep/.el-input__prefix {
    left: 85%;
    > .el-input__icon {
      transform: scale(1.5);
      line-height: 33px;
    }
  }
  .log-create-icon-right /deep/.el-input__inner {
    padding-left: 16px;
  }
}
</style>
<template>
  <div class="select-time-customize">
    <el-time-picker
      v-model="value"
      class="log-create-icon-right"
      arrow-control
      size="small"
      :clearable="false"
      format="hh:mm A"
      :picker-options="{
        selectableRange: '00:00:00 - 23:59:59',
      }"
      @change="getChange"
    />
  </div>
</template>

<script>
export default {
  name: "TimePicker",
  props: ["initTime", "getData"],
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    if (this.initTime) {
      this.value = this.initTime;
    }
  },
  methods: {
    getChange(value) {
      this.value = value;
      // this.value = moment(moment().format('YYYY-MM-DD')+'T'+value).format('hh:mm A')
      this.getData(value);
      // this.getData(value);
    },
  },
};
</script>
